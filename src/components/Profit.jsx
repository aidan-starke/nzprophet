import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'

import { Card } from 'react-bootstrap'

import { getPrice } from '../api'

import { roundTo } from '../helpers'

import { viewTransactions, changePage } from '../actions'

function Profit({ crypto, dispatch }) {
    const [profitData, setProfitData] = useState({})
    const [mounted, toggle] = useState(false)

    const { name, investment, coinsOwned, src } = crypto

    useEffect(() => {
        toggle(false)

        getPrice(name)
            .then(p => {
                var currentValue = p['NZD'] * coinsOwned
                var roundedValue = roundTo(currentValue, 2)

                var profit = currentValue - investment
                var roundedProfit = roundTo(profit, 2)

                var percentage = profit / investment
                var roundedPercentage = Math.round(percentage * 100)

                setProfitData({
                    profit: roundedProfit,
                    percentage: roundedPercentage,
                    value: roundedValue
                })

                toggle(true)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function linkHandler(e) {
        e.preventDefault()

        dispatch(viewTransactions(name))
        dispatch(changePage('transactions'))
    }

    return (
        <Card style={{ flex: 1, width: '15rem' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {!mounted && <Card.Text>Loading...</Card.Text>}
                {mounted && <>
                    <Card.Body>
                        You originally bought {coinsOwned} {name} for ${investment}.
                    </Card.Body>
                    <Card.Body>
                        Your coins are currently worth ${profitData.value}.
                    </Card.Body>
                    <Card.Body>
                        (${profitData.profit}, {profitData.percentage}% ROI)
                    </Card.Body>
                    <Card.Body>
                        <Card.Link onClick={e => linkHandler(e)}>Transaction History</Card.Link>
                    </Card.Body>
                </>}
            </Card.Body>
        </Card>
    )
}

export default connect()(Profit)

