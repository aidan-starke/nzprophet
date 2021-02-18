const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/:name', (req, res) => {
    const { name } = req.query.params
    console.log(req.query)

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
})

module.exports = router