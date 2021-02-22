import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React from 'react'

import { connect } from 'react-redux'

import { Card, Container } from 'react-bootstrap'

import Nav from './components/Nav'
import Footer from './components/Footer'
import ProfitCalculator from './components/ProfitCalculator'


function App({ currentPage, user }) {
  return (
    <Container>
      <Card>
        <Nav />

        {currentPage === user && <ProfitCalculator />}

        <Footer />
      </Card>
    </Container>
  )
}

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage,
    user: state.users.user
  }
}

export default connect(mapStateToProps)(App)
