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

})