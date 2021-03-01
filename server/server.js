const path = require('path')
const express = require('express')
const server = express()

const users = require('./routes/users')
const crypto = require('./routes/crypto')

const cors = require('cors')

server.use(cors())
server.use(express.json())

if (process.env.NODE_ENV === 'development')
    server.use(express.static(path.join(__dirname, '../public')))

if (process.env.NODE_ENV === 'production') {
    server.use(express.static(path.join(__dirname, '../build')))
    server.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build', 'index.html'))
    })
}
server.use('/api/v1/users', users)
server.use('/api/v1/crypto', crypto)


module.exports = server
