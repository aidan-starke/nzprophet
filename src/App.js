import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { connect } from 'react-redux'

import { Container } from 'react-bootstrap'

import Nav from './components/Nav'
import Footer from './components/Footer'
import ProfitCalculator from './components/ProfitCalculator'


function App({ currentPage }) {
  return (
    <Container>
      <Nav />

      {currentPage === 'Home' && <div className="App"></div>}

      {currentPage !== 'Home' && <ProfitCalculator />}

      <Footer />
    </Container>
  )
}

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(App)
