'use strict'

const numberRepository = require('../repositories/Number')

class NumberController {
  async get (req, res) {
    let results = []
    try {
      results = await numberRepository.get()
    } catch (err) {
      console.error(err)
      throw err
    }
    return res.status(200).send(results)
  }

  async findNumbers (req, res) {
    let results = []
    try {
      results = await numberRepository.findNumbers()
    } catch (err) {
      console.error(err)
      throw err
    }
    return res.status(200).send(results)
  }

  async create (req, res) {
    let result = {}
    const { body } = req
    try {
      result = await numberRepository.create(body)
    } catch (err) {
      console.error(err)
      throw err
    }
    return res.status(200).send(result)
  }

  async calculatedNumbers (req, res) {
    let results = []
    const { numbers } = req.body
    try {
      results = await numberRepository.calculatedNumbers(numbers)
    } catch (err) {
      console.error(err)
      throw err
    }
    return res.status(200).send(results)
  }
}

const numberController = new NumberController()

module.exports = numberController
