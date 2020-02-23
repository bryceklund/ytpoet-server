const express = require('express')
const getComments = require('./getComments')
const cleanData = require('./cleanData')
const generatePoem = require('./generatePoem')
const uuid = require('uuid/v4')
const PoemService = require('./poemService')
const logger = require('./logger')

const PoemRouter = express.Router()
const bodyParser = express.json()

PoemRouter.route('/api/generate')
    .post(bodyParser, (req, res, next) => {
        const { poemType, syllables, lines, profanity, url } = req.body
        getComments(url)
            .then(data => cleanData(data, profanity))
            .then(result => {
                return result
            })
            .then(clean => {
                res.send(generatePoem(clean, poemType, syllables, lines))
            })
            .catch(next)
    })

PoemRouter.route('/api/poem')
    .post(bodyParser, (req, res, next) => {
        const knexInstance = req.app.get('db')
        const { title, body } = req.body
        const id = uuid()
        const poem = { id, title }
        const lines = []
        body.forEach((line, i) => {
            lines.push({
                poem_id: id,
                order_id: i,
                body_line: line
            })
        })
        //post name and id
        PoemService.savePoem(knexInstance, poem)
            .then(poem => {
                lines.forEach(line => {
                    PoemService.savePoemLines(knexInstance, line)
                        .then(result => {
                            return logger.info(`Storing line ${line.order_id} for poem '${title}'...` )
                        })
                    .catch(next)
                })
            })
            .then(result => {
                res.send({ poemId: id })
            })
            .catch(next)
    })

PoemRouter.route('/api/poem/:poemId')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        const id = req.params.poemId
        const result = { title: '', body: [] }
        PoemService.getPoemTitle(knexInstance, id)
            .then(data => result.title = data[0].title)
            .then(getBody => {
                return PoemService.getPoemBody(knexInstance, id)
                        .then(data => {
                            return data.forEach((line, i) => {
                                result.body[line.order_id] = line.body_line
                            })
                        })
            })
            .then(done => res.send(result))
            .catch(next)
            
    })

PoemRouter.route('/api/random')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        PoemService.getPoemIds(knexInstance)
            .then(data => {
                console.log(data)
                const random = Math.floor(Math.random() * data.length)
                return data[random].id
            })
            .then(id => res.send(id))
            .catch(next)
    })

module.exports = PoemRouter