import React from 'react'

import { connect } from 'react-redux'

import { Card } from 'react-bootstrap'

import { roundTo } from '../helpers'

function CryptoCard({ crypto, key, data }) {
    return (
        <>
            <Card key={key} style={{ flex: 1, width: '15rem' }}>
                <Card.Img variant="top" src={crypto.src} />
                <Card.Body>
                    <Card.Title>{crypto.name}</Card.Title>
                    <Card.Text>
                        You invested ${crypto.investment} when {crypto.name} was ${roundTo(crypto.buyPrice, 2)}.
                        <br />
                        {/* You currently have ${data.profit} profit ({data.percentage}% ROI).) */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

function mapStateToProps(state) {
    return {
        data: state.users.cryptoData
    }
}

export default connect(mapStateToProps)(CryptoCard)