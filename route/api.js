const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const middleware = require('../middleware/middleware');

router.get('/', middleware, controller.index);

module.exports = router;