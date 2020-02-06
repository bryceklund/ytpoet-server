const express = require('express')
const getComments = require('./getComments')
const cleanData = require('./cleanData')
const generatePoem = require('./generatePoem')

const PoemRouter = express.Router()
const bodyParser = express.json()

PoemRouter.route('/generate')
    .post(bodyParser, (req, res, next) => {
        const { url, profanity } = req.query
        const { options } = req.body
        getComments(url)
            .then(data => cleanData(data, profanity))
            .then(clean => {
                res.send(generatePoem(clean, options))
            })
            .catch(next)
    })

module.exports = PoemRouter