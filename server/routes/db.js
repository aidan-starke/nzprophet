const express = require('express')

const db = require('../db')

const cors = require('cors')

const router = express.Router()

router.use(cors())

router.get('/crypto', (req, res) => {
    const { name } = req.query

    db.getUsername(name)
        .then(username => {
            db.getCrypto(name)
                .then(data => {
                    const viewData = {
                        username,
                        data
                    }
                    res.send(viewData)
                })
        })
        .catch(err => console.log(err.message))
})

router.get('/users', (req, res) => {
    db.getUsers()
        .then(users => res.send(users))
        .catch(err => console.log(err.message))
})

module.exports = router