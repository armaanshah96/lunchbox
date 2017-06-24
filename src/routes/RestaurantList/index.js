import React from 'react'
import PropTypes from 'prop-types'
import RestaurantCard from './components/RestaurantCard'
import './styles/main.css'

class RestaurantList extends React.Component {
  render () {
    //  example
    const { restaurantCard } = this.props

    return (
      <div>
        {
          restaurantCard.map(restaurant =>
            <RestaurantCard
              key={restaurant.id}
              title={restaurant.title}
            />)
        }
      </div>
    )
  }
}

RestaurantList.propTypes = {
  restaurantCard: PropTypes.object,
}

RestaurantList.defaultProps = {
  restaurantCard: null,
}

export default RestaurantList
