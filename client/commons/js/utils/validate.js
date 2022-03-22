function emailValid(email) {
	let emailRgx = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/gi;
	return emailRgx.test(email)
}
// 邮箱是否存在


// 用户名验证


// 
module.exports = {
	emailValid,
}
