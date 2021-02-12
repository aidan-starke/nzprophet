import React from 'react'

import { Container } from 'react-bootstrap'

import RefreshButton from './RefreshButton'
import ProfitCalculator from './ProfitCalculator'

const CryptoCard = () => {
    return (
        <Container>
            <RefreshButton />

            <ProfitCalculator />
        </Container>
    )
}

export default CryptoCard