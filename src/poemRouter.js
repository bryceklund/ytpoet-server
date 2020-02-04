const express = require('express')
const getComments = require('./getComments')
const cleanData = require('./cleanData')

const PoemRouter = express()

PoemRouter.get('/generate', (req, res, next) => {
    const { url, profanity } = req.query

    getComments(url)
        .then(data => cleanData(data, profanity))
        .then(clean => {
            console.log(clean)
            res.send(clean).sendStatus(200)
        })
        .catch(next)
})

module.exports = PoemRouter