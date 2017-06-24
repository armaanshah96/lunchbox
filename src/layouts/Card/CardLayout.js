import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FileFolder from 'material-ui/FontIcon';
import { List, ListItem } from 'material-ui/List';

export const CardLayout = ({ id, children, check, name, details, selectedRestaurantId }) => {
  const avatar = <Avatar icon={<FileFolder />} />;

  const updateCheck = function(event, isInputChecked) {
    check(isInputChecked, id)
  }

  console.log(id, selectedRestaurantId)

  const checkbox = <Checkbox onCheck={updateCheck}/>
  const boom = (
    <List>
      <ListItem
        leftCheckbox={ checkbox }
        rightAvatar={ avatar }
        primaryText={ name }
        secondaryText={ details }
      ></ListItem>
    </List>
  )

  return (
    <Card>
      <CardText
        children={ boom }
      />
    </Card>
  );
}

CardLayout.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  children: PropTypes.node,
  check: PropTypes.func.isRequired,
  selectedRestaurantId: PropTypes.string.isRequired
}

export default CardLayout
