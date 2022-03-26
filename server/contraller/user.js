const { User } = require('../model');


exports.findUser = async (req, res) => {
    console.log(req,res);
    const user=await User.find()
    res.status(201).json({
        state: 'success',
        test:'test',
        user:user
    })
    // User.find((err, dsata) => {
    //     if (err) return console.log('用户数据查找失败', err);
    //     res.send(data);
    // });
}