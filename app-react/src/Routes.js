// Load React
import React from 'react'

// import apps

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
// import { Provider } from 'react-redux'
// import { syncHistoryWithStore } from 'react-router-redux'
// import store from './Reducers'
// const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
import App from './components/App'
import Cart from './components/Cart'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
        
                <Route path="/" component={App} />
                <Route path="/cart" component={Cart} />
            </Router>
    }
}

export default Routes