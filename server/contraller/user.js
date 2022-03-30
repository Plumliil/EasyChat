const { User, Friend, GroupUser } = require('../model/index')
const bcrypt = require('../util/bcrypt')
const jwt = require('../util/jwt');
// 用户注册
exports.buildUser = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    // console.log(name,email,password);
    password = bcrypt.encryption(password);
    let data = {
        name: name,
        email: email,
        password: password,
        time: new Date()
    }
    let user = new User(data)
    user.save((error, result) => {
        if (error) return res.status(500);

    })
    delete data.password;
    res.status(200).json(data);
}
// 匹配用户表 元素个数
exports.countUserValue = (req, res) => {
    let data = req.body.data;
    let type = req.body.type;
    // console.log(data,type);
    let whereStr = {};
    whereStr[type] = data;
    User.countDocuments(whereStr, (error, result) => {
        if (error) return res.status(500);
        res.status(200).json(result)
    })
}

// 用户验证

exports.userMatch = async (req, res) => {
    let data = req.body.data;
    let password = req.body.password;
    let whereStr = { $or: [{ 'name': data }, { 'email': data }] };
    let out = {
        'name': 1,
        'imgUrl': 1,
        'password': 1
    }
    let user = User.find(whereStr, out, (error, result) => {
        if (error) res.status(500);
        if (result === '') res.status(400);
        result.map((item) => {
            const pwdMatch = bcrypt.verification(password, item.password);
            if (pwdMatch) {
                let token = jwt.generateToken(item._id);
                let back = {
                    id: item._id,
                    name: item.name,
                    imgUrl: item.imgUrl,
                    token: token
                }
                res.status(200).json(back);
            } else {
                res.status(400);
            }
        })
    })
}

// 搜索用户
exports.searchUser = (req, res) => {
    let whereStr = '';
    let data = req.body.data;
    if (req.query.data === 'EasyChat') {
        whereStr = {};
    } else {
        whereStr = { $or: [{ 'name': { $regex: data } }, { 'email': { $regex: data } }] }
    }
    let out = {
        'name': 1,
        'email': 1,
        'imgUrl': 1
    }
    User.find(whereStr, out, (error, result) => {
        if (error) {
            res.status(500).json(error)
        } else {
            res.status(200).json(result)
        }
    })
}
// 用户匹配判断是否为好友
exports.isFriend = (req, res) => {
    let uid = req.body.userID;
    let fid = req.body.friendID;
    let whereStr = { 'userID': uid, 'friendID': fid, 'state': 0 };
    Friend.findOne(whereStr, (error, result) => {
        if (error) {
            res.status(500).json(error)
        } else {
            if (result) {
                res.send({ status: 200 })
            } else {
                res.send({ status: 400 })
            }
        }
    })
}


// 搜索群
exports.searchGroup = (req, res) => {
    let whereStr = '';
    let data = req.body.data;
    if (req.query.data === 'EasyChat') {
        whereStr = {};
    } else {
        whereStr = { 'name': { $regex: data } };
    }
    let out = {
        'name': 1,
        'imgUrl': 1
    }
    User.find(whereStr, out, (error, result) => {
        if (error) {
            res.status(500).json(error)
        } else {
            res.status(200).json(result)
        }
    })
}
// 判断是否在群里
exports.isInGroup=(req,res)=>{
    let uid=req.body.userID;
    let gid=req.body.groupID;
    let whereStr={'userID':uid,'groupID':gid};
    GroupUser.findOne(whereStr, (error, result) => {
        if (error) {
            res.status(500).json(error)
        } else {
            if (result) {
                res.send({ status: 200 })
            } else {
                res.send({ status: 400 })
            }
        }
    })
}