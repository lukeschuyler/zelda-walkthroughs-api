'use strict'

const { bookshelf } = require('../db/database')
require('./Walkthrough');

const Game = bookshelf.Model.extend({
  tableName: 'game',
  items: function() { return this.hasMany('Walkthrough') }
}, {
  getAll() {
    return this.forge()
    .fetchAll()
    .then(games => games)
    .catch(error => error)
  },
  getOne(id) {
    return this.forge({id})
    .fetch()
    .then(game => game)
    .catch(error => error)
  },
  addGame(newGame) {
    return this.forge(newGame)
    .save()
    .then(game => game)
    .catch(error => error)
  },
  deleteGame(id) {
    return this.forge({id})
    .destroy()
    .then(game => game)
    .catch(error => error)
  }
})

module.exports = bookshelf.model('Game', Game)
