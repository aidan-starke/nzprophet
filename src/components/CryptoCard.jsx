import React from 'react'

import { connect } from 'react-redux'

import { CardDeck } from 'react-bootstrap'

import Profit from './Profit'

import TransactionButtons from './TransactionButtons'

const CryptoCard = ({ users }) => {
    return (
        <>
            <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
                {users.data.map((crypto, i) =>
                    <Profit crypto={crypto} key={i} />
                )}
            </CardDeck>
            <br />
            <TransactionButtons />
        </>
    )
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(CryptoCard)