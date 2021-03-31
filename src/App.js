import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React from 'react'

import { connect } from 'react-redux'

import { Card, Container, Row } from 'react-bootstrap'

import Nav from './components/Nav'
import Footer from './components/Footer'
import CryptoCard from './components/CryptoCard'
import Transactions from './components/Transactions'
import TransactionHistory from './components/TransactionHistory'

function App({ currentPage, users }) {
  return (
    <Container>
      <Card>
        <Nav />
        <Row className="d-flex justify-content-center">
          {currentPage === users.user && <CryptoCard />}

          {currentPage === 'transactions' && <Transactions />}

          {currentPage === 'transactionHistory' && <TransactionHistory />}
        </Row>
        <Footer />
      </Card>
    </Container>
  )
}

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage,
    users: state.users
  }
}

export default connect(mapStateToProps)(App)
