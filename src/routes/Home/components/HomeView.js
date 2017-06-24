import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import RaisedButton from 'material-ui/RaisedButton';
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
    <RaisedButton label="heyheyhey" />
  </div>
)

export default HomeView
