'use strict'

/**
 * Represents mongodb CRUD.
 * @constructor
 * @param {object} dataBase - Data base instance.
 */
class BaseRepository {
  constructor (dataBase) {
    this.db = dataBase
    this.Model = dataBase
  }

  /**
   * Find all data saved in the db.
   * @return {array} results - The all data found.
   */
  get () {
    return this.db.find({})
  }

  /**
   * Find data by id.
   * @param {string} id - Id dato to find.
   * @return {object} result - Found data.
   */
  getById (id) {
    return this.db.findById(id)
  }

  /**
   * Create register in db.
   * @param {object} data - Data to save.
   * @return {object} result - Data saved.
   */
  create (data) {
    const db = new this.Model(data)
    return db.save()
  }

  /**
   * Update register in db.
   * @param {string} id - Id data to update.
   * @param {object} data - Data to update.
   * @return {object} result - Data updated.
   */
  update (id, data) {
    return this.db.findOneAndUpdate({ _id: id }, { $set: data }, { new: true })
  }

  /**
   * Delete register in db.
   * @param {string} id - Id register to delete.
   * @return {object} result - Data deleted.
   */
  remove (id) {
    return this.db.deleteOne({ _id: id })
  }
}

module.exports = BaseRepository
