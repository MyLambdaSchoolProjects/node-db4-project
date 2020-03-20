const express = require('express');

const recipeRouter = require('./api/recipe-router');

const server = express();

const helmet = require('helmet');

server.use(helmet());

server.use(express.json());
server.use('/api/recipies/', recipeRouter);
server.use('/api/ingredients/', recipeRouter);

server.get('/', (req, res) =>{
    res.send('<h1>The Recipe API</h1>')
})

module.exports = server;