import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export const CardLayout = ({ children }) => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      // avatar="images/ok-128.jpg"
      // actAsExpander={true}
      // showExpandableButton={true}
    />
  </Card>
)
CardLayout.propTypes = {
  children: PropTypes.node,
}

export default CardLayout
