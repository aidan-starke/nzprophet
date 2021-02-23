import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React from 'react'

import { connect } from 'react-redux'

import { Card, Container } from 'react-bootstrap'

import Nav from './components/Nav'
import Footer from './components/Footer'
import CryptoCard from './components/CryptoCard'


function App({ currentPage, user }) {
  return (
    <Container>
      <Card>
        <Nav />

        {currentPage === user && <CryptoCard />}

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
