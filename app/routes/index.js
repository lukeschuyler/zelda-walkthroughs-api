'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./game.js'));
router.use(require('./walkthrough.js'));

module.exports = router;
