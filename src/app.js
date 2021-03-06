//require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV, CLIENT_ORIGIN } = require('./config');
const poemRouter = require('./poemRouter')

const app = express();

const morganOption = (NODE_ENV === 'production') ? 'tiny' : 'dev';

app.use(morgan(morganOption));
app.use(cors({ 
    'origin': CLIENT_ORIGIN,
    'optionsSuccessStatus': 200
}));
app.use(helmet());
app.use(poemRouter)

app.use(function validateBearerToken(req, res, next) {
    const apiToken = process.env.API_TOKEN;
    console.log(apiToken)
    const authToken = req.get('Authorization');

    if (!authToken || authToken.split(' ')[1] !== apiToken) {
        console.error(`Unauthorized request to path ${req.path}.`)
        res.status(401).json({ error: 'Unauthorized request' })
    };
    next();
});

app.get('/', (req, res) => {
    res.send('HELL WORLD')
});

app.use(function errorHandler(error, req, res, next) {
    let response;
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app