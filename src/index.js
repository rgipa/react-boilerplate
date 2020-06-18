import React from 'react'
import ReactDOM from 'react-dom'
import 'mobx-react/batchingForReactDom'
import { configure } from 'mobx'
// import { createBrowserHistory } from 'history'
// import { syncHistoryWithStore } from 'mobx-react-router'
import axios from 'axios'

// import routerService from 'Service/router'
import 'Styles/app.scss'
import App from 'app'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// init
axios.defaults.baseURL = window.location.origin
// syncHistoryWithStore(createBrowserHistory(), routerService)
configure({
  enforceActions: 'observed',
})
