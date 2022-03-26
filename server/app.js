const express = require('express');
const app = express();
const PORT = 3000;
const Router = require('./router/index');

// 数据库连接

require('./model/index')

//设置允许跨域访问该服务.
app.all('*',require('./config/cors'));

// 路由配置
app.use('/api', Router);

// 404页面出现错误
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
})
// 500 服务器错误
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message)
})
app.listen(PORT, () => {
    console.log(PORT + ' has listened');
})