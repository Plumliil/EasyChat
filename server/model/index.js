const mongoose = require('mongoose');
const { dbUri } = require('../config/db');
const schemas = require('./schemas')

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) return console.log('EasyChat 数据库连接失败');
    console.log('EasyChat 数据库连接成功');
})

// module.exports = {
//     User:mongoose.model('User',require('./users'))
// }



module.exports = {
    User: mongoose.model('User', schemas.userSchema),
    Friend: mongoose.model('Friend', schemas.friendSchema),
    Message: mongoose.model('Message', schemas.messageSchema),
    Group: mongoose.model('Group', schemas.groupSchema),
    GroupMem: mongoose.model('GroupMem', schemas.groupMemSchema),
    GroupMsg: mongoose.model('GroupMsg', schemas.groupMsgSchema),
};

// module.exports={
//     data:'model.index'
// }