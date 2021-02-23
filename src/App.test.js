import { render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

test('renders title', () => {
  render(<Provider store={store}><App /></Provider>)

  const linkElement = screen.getByText(/NZ Prophet/)

  expect(linkElement).toBeInTheDocument()
})

test('renders users', () => {
  render(<Provider store={store}><App /></Provider>)

  const linkElement = screen.getByText(/Users/)

  expect(linkElement).toBeInTheDocument()
})
