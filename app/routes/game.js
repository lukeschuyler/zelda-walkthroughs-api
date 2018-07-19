'use strict';

const { Router } = require('express');

const { getAll, getOne, addGame, deleteGame } = require('../controllers/GameController');

const router = Router();

router.get('/products/all', getAll);
router.get('/products', getAllCurrent);
router.get('/products/:id', getOne);
router.post('/products', addProduct)
router.delete('/products/:id', deleteProduct)
router.patch('/products', editProduct)

module.exports = router;
