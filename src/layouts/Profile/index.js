import React from 'react'
import { connect } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';

class Person extends React.Component {
  render () {
    return (
      <div>
        <table>
          <td style={{ width: '30%' }}>
            <img style={{ borderRadius: '50%' }} src="https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header"/>
          </td>
          <td style={{ 'margin-left': '100px', width: '50%' }}>
            <TextField
              floatingLabelText="Team"
            /><br />
            <TextField
              floatingLabelText="Role"
            /><br />
            <TextField
              floatingLabelText="Likes"
            /><br />
          </td><br />
        </table>

        <div style={{ display: "block", width: '80%' }}>
          <div id="questions">
            <TextField
              floatingLabelText="What's a personal project you're working on this month?"
              fullWidth={true}
            /><br />
            <TextField
              floatingLabelText="What movie or book do you want to see/read next?"
              fullWidth={true}
            /><br />
            <TextField
              floatingLabelText="What's your favorite thing about Chicago?"
              fullWidth={true}
            /><br />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, {})(Person)
