const path = require('path')
const express = require('express')
const server = express()
require('dotenv').config()

const users = require('./routes/users')
const crypto = require('./routes/crypto')

const cors = require('cors')

server.use(cors())
server.use(express.json())

if (process.env.NODE_ENV === "production") {
    server.use(express.static(path.join(__dirname, '../public')))
    server.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "public", "index.html"));
    });
}

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/users', users)
server.use('/api/v1/crypto', crypto)


module.exports = server
