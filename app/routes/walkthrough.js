'use strict';

const { Router } = require('express');

const { getAll, getOne } = require('../controllers/WalkthroughController');

const router = Router();

router.get('/walkthroughs/', getAll);
router.get('/walkthroughs/:id', getOne);

module.exports = router;
