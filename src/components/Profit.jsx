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
        <>
            {coinsOwned !== 0 && <Card style={{ flex: 1, width: '15rem' }}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    {!mounted && <Card.Text>Loading...</Card.Text>}
                    {mounted && <>
                        {investment !== 0 && <Card.Text>
                            Your inital investment was ${investment}
                        </Card.Text>}
                        <Card.Text>
                            You own {coinsOwned} coins.
                    </Card.Text>
                        <Card.Text>
                            Your coins are worth ${profitData.value}
                        </Card.Text>
                        {investment !== 0 && <Card.Text>
                            Change from initial investment:
                        <br />
                        ${profitData.profit} ({profitData.percentage}%)
                    </Card.Text>}
                        <Card.Text>
                            <Card.Link onClick={e => linkHandler(e)}>Transaction History</Card.Link>
                        </Card.Text>
                    </>}
                </Card.Body>
            </Card>}
        </>
    )
}

export default connect()(Profit)

