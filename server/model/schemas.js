const mongoose = require('mongoose');
const { User } = require('.');
const Schema = mongoose.Schema;

// 用户表
const userSchema = new Schema({
    name: { type: String },                                   // 用户名
    password: { type: String },                               // 密码
    email: { type: String },                                    // 邮箱
    sex: { type: String, default: 'asexual' },                  // 性别
    birth: { type: Date },                                    // 生日
    tel: { type: Number },                                      // 电话
    explain: { type: String },                                  // 介绍
    imgUrl: { type: String, default: 'user.png' },              // 用户头像
    time: { type: Date },                                      // 注册时间
})
// 好友表
const friendSchema = new Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'User' },       // 用户id                  
    frinedID: { type: Schema.Types.ObjectId, ref: 'User' },     // 好友id   
    markName:{type:String},                                      // 好友昵称                         
    state: { type: String },                                    // 状态(0已为好友,1申请中,2申请发送方,对方不同意)
    time: { type: Date },                                       // 注册时间
})
// 一对一消息表
const messageSchema = new Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'User' },        // 用户id                  
    frinedID: { type: Schema.Types.ObjectId, ref: 'User' },      // 好友id                           
    message: { type: String },                                   // 内容
    types: { type: String },                                     // 内容类型(0文字1图片链接2音频链接...)
    state: { type: Number },                                     // 接收状态(1已读,1未读)
    time: { type: Date },                                        // 注册时间
})
// 群表
const groupSchema = new Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'User' },        // 用户id                  
    name: { type: String },                                      // 内容
    imgUrl: { type: String, default: 'group.png' },              // 内容类型(0文字1图片链接2音频链接...)
    notice: { type: String },                                    // 群公告
    time: { type: Date },                                        // 注册时间
})
// 群成员表
const groupMemSchema = new Schema({
    groupID: { type: Schema.Types.ObjectId, ref: 'Group' },      // 群id                  
    userID: { type: Schema.Types.ObjectId, ref: 'User' },        // 用户id                  
    name: { type: String },                                      // 群内名称
    tip: { type: Number, default: 0 },                           // 未读消息数
    shield: { type: Number },                                    // 是否屏蔽群(0不屏蔽,1屏蔽)
    time: { type: Date },                                        // 加入时间

})
// 群信息表
const groupMsgSchema = new Schema({
    groupID: { type: Schema.Types.ObjectId, ref: 'Group' },      // 群id                  
    userID: { type: Schema.Types.ObjectId, ref: 'User' },        // 用户id                  
    message: { type: String },                                   // 内容
    types: { type: Number },                                      // 未读消息数
    time: { type: Date },                                        // 注册时间
})



module.exports = {
    userSchema,
    friendSchema,
    messageSchema,
    groupSchema,
    groupMemSchema,
    groupMsgSchema
}