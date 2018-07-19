'use strict'

const { bookshelf } = require('../db/database')
require('./Game');

const Walkthrough = bookshelf.Model.extend({
  tableName: 'walkthrough',
  items: function() { return this.belongsTo('Game') }
}, {
  getAll() {
    return this.forge()
    .fetchAll()
    .then(walkthroughs => walkthroughs)
    .catch(error => error)
  },
  getOne(id) {
    return this.forge({id})
    .fetch()
    .then(walkthrough => walkthrough)
    .catch(error => error)
  },
  addGame(newWalkthrough) {
    return this.forge(newWalkthrough)
    .save()
    .then(walkthrough => walkthrough)
    .catch(error => error)
  },
  deleteWalkthrough(id) {
    return this.forge({id})
    .destroy()
    .then(walkthrough => walkthrough)
    .catch(error => error)
  }
})

module.exports = bookshelf.model('Walkthrough', Walkthrough)
