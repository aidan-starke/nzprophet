import React from 'react'

import { Card, Button } from 'react-bootstrap'

import { connect } from 'react-redux'

import { getCrypto } from '../api'

import { changePage, setUser, setUsersCrypto } from '../actions'


const DemoPage = ({ dispatch }) => {
    function buttonHandler(e) {
        e.preventDefault()

        getCrypto('Demo')
            .then(res => {
                console.log(res)
                dispatch(setUsersCrypto(res))
                dispatch(setUser('Demo'))
                dispatch(changePage('Demo'))
            })
    }
    return (
        <Card>
            <Card.Img variant="top" src='./fade.gif' style={{ width: '500px', margin: 'auto' }} />
            <Card.Text align='center'>
                Welcome to the demo version of my personal app!
            </Card.Text>
            <Card.Text align='center'>
                This 'portfolio' demonstrates a $3000 investment into crypto on 12th Feb 2021.
            </Card.Text>
            <Card.Text align='center' className="text-muted">
                Note: all prices are in NZD and transaction forms are for illustration only
            </Card.Text>
            <Button variant="secondary" type="submit" onClick={e => buttonHandler(e)}>Check it out!</Button>
        </Card>
    )
}

export default connect()(DemoPage)