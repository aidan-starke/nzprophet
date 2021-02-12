import React, { useState } from 'react'

import { connect } from 'react-redux'

import { roundTo } from '../helpers'

import { Button, Card, FormControl, FormGroup, Row } from 'react-bootstrap'

const ProfitCalculator = ({ crypto }) => {
    const [profitToggle, toggle] = useState(false)
    const [profit, setProfit] = useState('')
    const [profitPercentage, setPercentage] = useState('')
    const [currentPrice, setCurrentPrice] = useState(crypto.price)

    const { img, name, value, price } = crypto

    function calculateProfit() {
        const owned = value / price
        const currentValue = roundTo(currentPrice * owned, 2)

        const roundedProfit = roundTo(currentValue - value, 2)
        setProfit(`$${roundedProfit}`)

        const roundedPercentage = Math.round(roundedProfit / value * 100)
        setPercentage(`${roundedPercentage}%`)

        toggle(true)
    }


    return (
        <Row className="d-flex justify-content-center cryptocard">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        You dropped ${crypto.value} when {name} was ${roundTo(price, 2)}.
                            <br />
                        {!profitToggle && <>Enter current price:</>}
                    </Card.Text>
                    {profitToggle && <Card.Text>
                        You currently have {profit} profit ({profitPercentage} ROI)
                        </Card.Text>}
                    {!profitToggle && <FormGroup className="d-flex justify-content-center">
                        <FormControl type='text' value={currentPrice} onChange={e => setCurrentPrice(e.target.value)} />
                        <Button onClick={e => calculateProfit(e)}>Submit</Button>
                    </FormGroup>}
                </Card.Body>
            </Card>
        </Row>
    )
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(ProfitCalculator)