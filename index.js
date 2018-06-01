import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
// import { browserHistory } from "react-router-redux"

import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import initStore from './src/store'

import App from './src/components/app'
import './src/styles/main.scss'

const store = initStore(window.__INITIAL_STATE__ || {})
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
	  <Router history={history}>
	  	<Route path="/" component={App} />
	  </Router>
  	</Provider>, document.getElementById('root'))
