import React, { useEffect, useState } from 'react'

import { Card } from 'react-bootstrap'

import { getPrice } from '../api'

import { roundTo } from '../helpers'

function Profit({ crypto }) {
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

    return (
        <Card style={{ flex: 1, width: '15rem' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {!mounted && <Card.Text>Loading...</Card.Text>}
                {mounted && <Card.Text>
                    You bought {coinsOwned} {name} for ${investment}.
                    <br />
                    Your coins are now worth ${profitData.value}.
                    <br />
                    (${profitData.profit}, {profitData.percentage}% ROI)
                </Card.Text>}
            </Card.Body>
        </Card>
    )
}

export default Profit