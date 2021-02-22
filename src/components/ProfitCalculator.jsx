import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'

import { roundTo } from '../helpers'

import { CardDeck, Row } from 'react-bootstrap'

import { getPrice } from '../api'

import CryptoCard from './CryptoCard'

const ProfitCalculator = ({ users }) => {
    const [profits] = useState([])

    useEffect(() => {
        users.data.forEach(crypto => {
            const { buyPrice, investment, name } = crypto

            getPrice(name)
                .then(p => {
                    var owned = roundTo(investment / buyPrice, 2)
                    var currentValue = roundTo(p['NZD'] * owned, 2)

                    var profit = currentValue - investment
                    var roundedProfit = roundTo(profit, 2)

                    var percentage = profit / investment
                    var roundedPercentage = Math.round(percentage * 100)

                    profits.push({
                        name,
                        profit: roundedProfit,
                        percentage: roundedPercentage
                    })
                })
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Row className="d-flex justify-content-center">
            <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
                {users.data.map((crypto, i) =>
                    <CryptoCard profits={profits} crypto={crypto} key={i} />
                )}
            </CardDeck>
        </Row>
    )
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ProfitCalculator)