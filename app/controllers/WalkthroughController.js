'use strict'

const { bookshelf } = require('../db/database')
const Walkthrough = require('../models/Walkthrough')

module.exports.getAll = (req, res, next) => {
  Walkthrough.getAll()
  .then(walkthroughs => res.status(200).json(walkthroughs))
  .catch(error => next(error))
}

module.exports.getOne = ({ params: {id} }, res, next) => {
  Walkthrough.getOne(id)
  .then(walkthrough => {
    res.status(200).json(walkthrough)
  })
  .catch(error => next(error))
}
