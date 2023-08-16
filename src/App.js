import React from 'react'
import Router from './Router'
import Navigation from './components/Navigation'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'


export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

