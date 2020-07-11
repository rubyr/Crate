import React from 'react'
import Shipments from './Shipments'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { rootReducer } from '../../setup/store'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const renderTestWrapper = () => {
  const store = createStore(rootReducer, compose())
  const history = createMemoryHistory() 
  return render(
    <Router history={history}>
      <Provider store={store}>
        <Shipments />
      </Provider>
    </Router>
  )
}

describe('Shipments', () => {
  it('should render the correct content', () => {
    const { getByText, getAllByText } = renderTestWrapper()

    const pageTitle = getByText('Your Shipments')
    const titleSubheading = getByText('View all your past/future shipments, the items it contains, and which items you kept!')
    const card1Title = getAllByText('Clothes for Men')
    const itemListHeading = getByText('Items In This Order:')
    
    expect(pageTitle).toBeInTheDocument()
    expect(titleSubheading).toBeInTheDocument()
    expect(itemListHeading).toBeInTheDocument()
    expect(card1Title).toHaveLength(2)
  })

})