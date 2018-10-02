'use strict'

const { bookshelf } = require('../db/database')
const Game = require('../models/Game')

module.exports.getAll = (req, res, next) => {
  Game.getAll()
  .then(games => res.status(200).json(games))
  .catch(error => next(error))
}

module.exports.getOne = ({ params: { id } }, res, next) => {
  Game.getOne(id)
  .then(game => {
    res.status(200).json(game)
  })
  .catch(error => next(error))
}
