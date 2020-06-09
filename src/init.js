import 'mobx-react/batchingForReactDom'

import { configure } from 'mobx'
import { createBrowserHistory } from 'history'
import { syncHistoryWithStore } from 'mobx-react-router'
import axios from 'axios'
import routerService from 'Service/router'

axios.defaults.baseURL = window.location.origin

syncHistoryWithStore(createBrowserHistory(), routerService)

configure({
  enforceActions: 'observed',
})
