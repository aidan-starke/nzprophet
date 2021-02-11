import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { connect } from 'react-redux'

import Dropdown from './components/Dropdown'
import CryptoCard from './components/CryptoCard'

import { Container, Row } from 'react-bootstrap'

function App({ currentPage }) {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <h1>NZ Prophet</h1>
      </Row>

      {currentPage === 'Home' && <div className="App">
        <Dropdown />
      </div>}

      {currentPage !== 'Home' && <CryptoCard />}
    </Container>
  )
}

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(App)
