import React, { useState } from 'react'

import { Button, Card, Container, FormControl, FormGroup, Row } from 'react-bootstrap'

import { connect } from 'react-redux'

import { roundTo } from '../helpers'

import { refresh } from '../actions'

const CryptoCard = ({ crypto, dispatch }) => {
    const [profitToggle, toggle] = useState(false)
    const [profit, setProfit] = useState('')
    const [profitPercentage, setPercentage] = useState('')
    const [currentPrice, setCurrentPrice] = useState(crypto.price)

    function refreshButton(e) {
        e.preventDefault()

        dispatch(refresh())
    }

    function currentProfit(e) {
        // e.preventDefault()

        const { price, invested } = crypto

        const owned = invested / price
        const currentValue = roundTo(currentPrice * owned, 2)
        const prophet = roundTo(currentValue - invested, 2)
        setProfit(`$${prophet}`)
        console.log(owned, currentValue, prophet)

        const percent = Math.round(prophet / invested * 100)
        setPercentage(`${percent}%`)

        toggle(true)
    }

    return (
        <Container>
            <Row className="d-flex justify-content-center" >
                <Button onClick={e => refreshButton(e)}>Refresh</Button>
            </Row>

            <Row className="d-flex justify-content-center cryptocard">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={crypto.img} />
                    <Card.Body>
                        <Card.Title>{crypto.name}</Card.Title>
                        <Card.Text>
                            You dropped ${crypto.invested} when {crypto.name} was ${crypto.price}.
                            <br />
                            {!profitToggle && <>Enter current price:</>}
                        </Card.Text>
                        {profitToggle && <Card.Text>
                            You currently have {profit} profit ({profitPercentage} ROI)
                        </Card.Text>}
                        {!profitToggle && <FormGroup controlId='formCurrentPrice.ControlTextarea1' className="d-flex justify-content-center">
                            <FormControl type='text' value={currentPrice} onChange={e => setCurrentPrice(e.target.value)} />
                            <Button onClick={e => currentProfit(e)}>Submit</Button>
                        </FormGroup>}
                    </Card.Body>
                </Card>
            </Row>

        </Container>
    )
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(CryptoCard)