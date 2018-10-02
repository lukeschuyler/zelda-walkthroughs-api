'use strict';

const { Router } = require('express');

const { getAll, getOne } = require('../controllers/GameController');

const router = Router();

router.get('/games/', getAll);
router.get('/games/:id', getOne);

module.exports = router;
