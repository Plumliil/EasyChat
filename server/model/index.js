const mongoose = require('mongoose');
const { dbUri } = require('../config/db');
mongoose.connect(dbUri, (err) => {
    if (err) return console.log('EasyChat 数据库连接失败');
    console.log('EasyChat 数据库连接成功');
})

// module.exports = {
//     User:mongoose.model('User',require('./users'))
// }

const Schema = mongoose.Schema;

const userSchema = new Schema();

module.exports = {
    User: mongoose.model('User', userSchema)
};
