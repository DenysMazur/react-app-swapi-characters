/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import RootStore from './store'

const store = RootStore.create({})

export const StoreContext = createContext(store)

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
