'use strict'

const schema = require('./model')
const setUpDb = require('../../db')
const BaseRepository = require('../Base')

class NumberRepository extends BaseRepository {
  constructor (dataBase) {
    super(dataBase)
    this.collection = 'infonumbers'
  }

  calculatedNumbers (numbers) {
    return this.db.update(
      { number: { $in: numbers } },
      { $set: { calculated: true } },
      { multi: true }
    )
  }

  findNumbers () {
    return this.db.aggregate([
      {
        $group: {
          _id: '$number',
          length: { $first: '$length' },
          totalPending: { $sum: { $cond: { if: { $eq: ['$calculated', false] }, then: '$value', else: 0 } } },
          totalCalculated: { $sum: { $cond: { if: { $eq: ['$calculated', true] }, then: '$value', else: 0 } } }
        }
      },
      { $sort: { totalPending: -1 } }
    ])
  }
}

const connection = setUpDb()

const numberRepository = new NumberRepository(connection.model('infonumbers', schema))

module.exports = numberRepository
