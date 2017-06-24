import React from 'react'
import PropTypes from 'prop-types'
import GroupHeader from '../../../layouts/Group/Header'
import GroupFactList from '../../../layouts/Group/FactList'

export const Results = ({ results }) => (
  <div>
	<GroupHeader />
	<hr/>
	<GroupFactList />
  </div>
)

Results.propTypes = {
  results: PropTypes.array
}

export default Results
