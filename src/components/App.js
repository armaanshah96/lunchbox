import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types'

// Thomas -- adding sign in check to use the app
class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <MuiThemeProvider>
            <Router history={browserHistory} children={this.props.routes} />
          </MuiThemeProvider>
        </div>
      </Provider>
    )
  }
}

export default App
