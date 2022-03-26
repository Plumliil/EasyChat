const {User}=require('../model/index')

exports.findUser = async (req, res) => {
    // console.log(req,res);
    // const user=await User.find()
    console.log(User.find());
    res.status(201).json({
        state: 'success',
        test:'test',
        user:JSON.stringify(User.find())
    })
}