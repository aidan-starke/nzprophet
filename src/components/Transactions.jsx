import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'

import { CardDeck } from 'react-bootstrap'

import { getTrades } from '../api'

import Transaction from './Transaction'

function Transactions({ crypto, users }) {
    const [transactionData, setTransactionData] = useState([])
    const [mounted, toggle] = useState(false)

    const { currentCrypto } = crypto
    const { user } = users

    useEffect(() => {
        getTrades(user, currentCrypto)
            .then(data => {
                setTransactionData(data)
                toggle(true)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
            {mounted && transactionData.map((data, i) =>
                <Transaction transactionData={data} key={i} />
            )}
        </CardDeck>
    )
}

function MapStateToProps(state) {
    return {
        crypto: state.crypto,
        users: state.users
    }
}

export default connect(MapStateToProps)(Transactions)