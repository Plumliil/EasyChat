const express = require('express');
const userContrallor = require('../contraller/user');
const router = express.Router();


// 注册
router.post('/signup/add', userContrallor.buildUser);
// 判断邮箱是否被占用
router.post('/signin/judge', userContrallor.countUserValue);
// 用户登录
router.post('/signin/match', userContrallor.userMatch);






module.exports = router;