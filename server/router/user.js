const express = require('express');
const userContrallor = require('../contraller/user');
const router = express.Router();


// 注册
router.post('/signup/add', userContrallor.buildUser);
// 判断邮箱是否被占用
router.post('/signin/judge', userContrallor.countUserValue);
// 用户登录
router.post('/signin/match', userContrallor.userMatch);
// 用户搜索
router.post('/search/user',userContrallor.searchUser);
// 判断是否为好友
router.post('/search/isFriend',userContrallor.isFriend);
// 群搜索
router.post('/search/group',userContrallor.searchUser);
// 判断是否在群内
router.post('/search/isInGroup',userContrallor.isInGroup);





module.exports = router;