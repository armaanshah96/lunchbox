import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader } from 'material-ui/Card';

export const Header = ({ children }) => (
  <Card style>
    <CardHeader
      title="BrightWok"
      subtitle="Thai Delishiousness"
      // title={children.title}
      // subtitle={children.description}
    />
  </Card>
)
Header.propTypes = {
  children: PropTypes.node,
}

export default Header
