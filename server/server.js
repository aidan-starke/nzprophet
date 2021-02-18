const path = require('path')
const express = require('express')
const server = express()
const db = require('./routes/db')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/db', db)

module.exports = server
