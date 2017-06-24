import React from 'react'
import PropTypes from 'prop-types'
import CardComponent from '../../../layouts/Card/CardLayout'

export const Restaurant = ({ restaurants, check, selectedRestaurantId }) => {
  return (
    <div>
      <CardComponent id="1" check={check} selectedRestaurantId={selectedRestaurantId}/>
      <CardComponent id="2" check={check} selectedRestaurantId={selectedRestaurantId}/>
      <CardComponent id="3" check={check} selectedRestaurantId={selectedRestaurantId}/>
    </div>
  );
}

Restaurant.propTypes = {
  restaurants: PropTypes.array.isRequired,
  check: PropTypes.func.isRequired,
  selectedRestaurantId: PropTypes.string.isRequired
}

export default Restaurant
