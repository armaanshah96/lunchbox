import React from 'react'
import { connect } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types'

import { authenticated } from '../actions'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  render () {
    return (
      <div>
        {
          this.props.isAuthenticated ?
          <Provider store={this.props.store}>
            <div style={{ height: '100%' }}>
              <Router history={browserHistory} children={this.props.routes} />
            </div>
          </Provider> :
          <button onClick={ this.props.authenticated }>sign in</button>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { isAuthenticated: state.isAuthenticated }
}

export default connect(mapStateToProps, { authenticated })(App)
