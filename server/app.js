const express = require('express');
const app = express();
const PORT = 3000;
const Router = require('./router/index');


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// 数据库连接

require('./model/index')

//设置允许跨域访问该服务.
app.all('*',require('./config/cors'));
// app.use(require('./config/cors'));
// app.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
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
