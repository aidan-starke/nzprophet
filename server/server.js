const path = require('path')
const express = require('express')
const server = express()

const users = require('./routes/users')
const crypto = require('./routes/crypto')

const cors = require('cors')

server.use(cors())
server.use(express.json())

server.use('/api/v1/users', users)
server.use('/api/v1/crypto', crypto)

if (process.env.NODE_ENV === 'production') {
    server.use(express.static(path.join(__dirname, '../build')));
    server.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    })
}

module.exports = server
