import React from 'react'
import PropTypes from 'prop-types'
import CardComponent from '../../../layouts/Card/CardLayout'

export const Restaurant = ({ restaurants }) => (
  <CardComponent />
)

Restaurant.propTypes = {
  restaurants: PropTypes.array
}

export default Restaurant
