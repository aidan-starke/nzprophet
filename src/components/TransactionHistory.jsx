import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'

import { CardDeck, Button } from 'react-bootstrap'

import { getTrades } from '../api'

import Transaction from './Transaction'

import { changePage } from '../actions'

function TransactionHistory({ crypto, users, dispatch }) {
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
        <CardDeck style={{ display: 'flex', flexDirection: 'column' }}>
            {mounted && transactionData.map((data, i) =>
                <Transaction transactionData={data} key={i} />
            )}
            <Button variant="secondary" type="submit" onClick={() => dispatch(changePage('Demo'))}>
                Return
            </Button>
        </CardDeck>
    )
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto,
        users: state.users
    }
}

export default connect(mapStateToProps)(TransactionHistory)