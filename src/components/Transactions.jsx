import React from 'react'

import { CardDeck } from 'react-bootstrap'

import { connect } from 'react-redux'

import TradeForm from './TradeForm'
import BuyForm from './BuyForm'

const Transactions = ({ crypto, users }) => {
    return (
        <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
            <TradeForm user={users.user} usersCrypto={crypto.usersCrypto} />
            <BuyForm user={users.user} usersCrypto={crypto.usersCrypto} />
        </CardDeck>
    )
}

function mapStateToProps(state) {
    return {
        users: state.users,
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(Transactions)