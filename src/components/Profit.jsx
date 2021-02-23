import React, { useEffect, useState } from 'react'

import { Card } from 'react-bootstrap'

import { getPrice } from '../api'

import { roundTo } from '../helpers'

function Profit({ crypto, key }) {
    const [profitData, setProfitData] = useState({})
    const [mounted, toggle] = useState(false)

    useEffect(() => {
        toggle(false)
        const { name, investment, buyPrice } = crypto
        getPrice(name)
            .then(p => {
                var owned = roundTo(investment / buyPrice, 2)
                var currentValue = roundTo(p['NZD'] * owned, 2)

                var profit = currentValue - investment
                var roundedProfit = roundTo(profit, 2)

                var percentage = profit / investment
                var roundedPercentage = Math.round(percentage * 100)

                setProfitData({
                    profit: roundedProfit,
                    percentage: roundedPercentage
                })

                toggle(true)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Card key={key} style={{ flex: 1, width: '15rem' }}>
            <Card.Img variant="top" src={crypto.src} />
            <Card.Body>
                <Card.Title>{crypto.name}</Card.Title>
                {!mounted && <Card.Text>Loading...</Card.Text>}
                {mounted && <Card.Text>
                    You invested ${crypto.investment} when {crypto.name} was ${roundTo(crypto.buyPrice, 2)}.
                    <br />
                    You currently have ${profitData.profit} profit ({profitData.percentage}% ROI)
                </Card.Text>}
            </Card.Body>
        </Card>
    )
}

export default Profit