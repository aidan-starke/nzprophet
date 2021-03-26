import React from 'react'

import { connect } from 'react-redux'

import { CardDeck } from 'react-bootstrap'

import Profit from './Profit'

import TransactionButtons from './TransactionButtons'

const CryptoCard = ({ crypto }) => {
    return (
        <>
            <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
                {crypto.usersCrypto.map((crypto, i) =>
                    <Profit crypto={crypto} key={i} />
                )}
            </CardDeck>
            <TransactionButtons />
        </>
    )
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(CryptoCard)