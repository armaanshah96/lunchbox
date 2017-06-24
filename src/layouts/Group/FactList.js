import React from 'react'
import PropTypes from 'prop-types'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export const FactList = ({ children }) => (
  <List>
    <Subheader>Fun Facts </Subheader>
    <ListItem
      primaryText="Fun Fact 1"
      secondaryText="I love llamas"
    />
    <ListItem
      primaryText="Fun Fact 2"
      secondaryText="Dragons and React"
    />
    <ListItem
      primaryText="Fun Fact 1"
      secondaryText="I love llamas"
    />
    <ListItem
      primaryText="Fun Fact 2"
      secondaryText="Dragons and React"
    />
    <ListItem
      primaryText="Fun Fact 1"
      secondaryText="I love llamas"
    />
    <ListItem
      primaryText="Fun Fact 2"
      secondaryText="Dragons and React"
    />
  </List>
)
FactList.propTypes = {
  children: PropTypes.node,
}

export default FactList
