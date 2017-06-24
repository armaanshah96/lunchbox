import React from 'react'
import PropTypes from 'prop-types'
import RestaurantCard from './components/RestaurantCard'
import ProfilePreview from './components/ProfilePreview'

class RestaurantGroup extends React.Component {
  render () {
    // example
    const { profiles } = this.props
    return (
      <div>
        <RestaurantCard {...this.props} />
        <div>
        { this.props.profiles.map(profile =>
          <ProfilePreview
            key={profile.id}
          />)
        }
        </div>
      </div>
    )
  }
}

RestaurantGroup.propTypes = {
  profiles: PropTypes.object,
}

RestaurantGroup.defaultProps = {
  profiles: null,
}

export default RestaurantGroup
