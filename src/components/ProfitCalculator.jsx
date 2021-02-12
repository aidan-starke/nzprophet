import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'

import { roundTo } from '../helpers'

import { Card, Row } from 'react-bootstrap'

import { getPrice } from '../api'

const ProfitCalculator = ({ crypto }) => {
    const [profit, setProfit] = useState(0)
    const [profitPercentage, setPercentage] = useState(0)
    const [hidden, toggle] = useState(true)

    const { img, name, owned, price, value } = crypto

    useEffect(() => {
        getPrice(name)
            .then(p => {
                calculateProfit(p['NZD'])
            })
    }, [])


    function calculateProfit(currentPrice) {
        alert(`Current price of ${name}: ${currentPrice}`)

        const currentValue = roundTo(currentPrice * owned, 2)

        const roundedProfit = roundTo(currentValue - value, 2)
        setProfit(`$${roundedProfit}`)

        const roundedPercentage = Math.round(roundedProfit / value * 100)
        setPercentage(`${roundedPercentage}%`)

        toggle(false)
    }


    return (
        <>
            {!hidden && <Row className="d-flex justify-content-center cryptocard">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            You dropped ${value} when {name} was ${roundTo(price, 2)}.
                        <br />
                        You currently have {profit} profit ({profitPercentage} ROI). Press Home to refresh.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>}
        </>
    )
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(ProfitCalculator)