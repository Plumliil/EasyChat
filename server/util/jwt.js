const jwt = require('jsonwebtoken');
const secret = 'EasyChat';
// token
exports.generateToken = (id, res) => {
    let payload = {
        id: id,
        time: new Date()
    }
    let token = jwt.sign(payload, secret, { expiresIn: 60 * 60 * 24 * 120 });
    return token;
}

// 解码
exports.verifyToken = (token) => {
    let payload = jwt.verify(token, secret);
    return payload;
}

