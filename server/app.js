const express = require('express');
const app = express();
const PORT = 3000;
const Router = require('./router/index');
const jwt= require('./util/jwt')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// 数据库连接
require('./model/index')

//设置允许跨域访问该服务.
app.all('*',require('./config/cors'));

// token判断
app.use((req,res,next)=>{
    if(typeof(req.body.token)!=='undefined'){
        // 处理token
        let token=req.body.token;
        let tokenMatch=jwt.verifyToken(token);
        console.log('tokenMatch',tokenMatch);
        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDNlMjdiMDQxMWZjM2YyZGQzNzQ4MyIsInRpbWUiOiIyMDIyLTAzLTMwVDA1OjEzOjI2LjcwOVoiLCJpYXQiOjE2NDg2MTcyMDYsImV4cCI6MTY1ODk4NTIwNn0.-KBV4k43nXECPkma1lb01tDOQX9iM1OJn4rxfgOolV4
        res.send(tokenMatch)
        // if(tokenMatch)
    }else{
        next();
    }
})

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
