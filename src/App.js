import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React from 'react'

import { connect } from 'react-redux'

import { Card, Container, Row } from 'react-bootstrap'

import Nav from './components/Nav'
import Footer from './components/Footer'
import CryptoCard from './components/CryptoCard'
import TradeForm from './components/TradeForm'
import Transactions from './components/Transactions'

function App({ currentPage, users, crypto }) {
  return (
    <Container>
      <Card>
        <Nav />
        <Row className="d-flex justify-content-center">
          {currentPage === users.user && <CryptoCard />}

          {currentPage === 'trade' && <TradeForm user={users.user} usersCrypto={crypto.usersCrypto} />}

          {currentPage === 'transactions' && <Transactions />}
        </Row>
        <Footer />
      </Card>
    </Container>
  )
}

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage,
    users: state.users,
    crypto: state.crypto
  }
}

export default connect(mapStateToProps)(App)
