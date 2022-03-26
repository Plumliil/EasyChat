const express = require('express');
const router = express.Router();
// const User = require('../model')
const { findUser } = require('../contraller/user')
router.get('/', findUser)
module.exports = router;