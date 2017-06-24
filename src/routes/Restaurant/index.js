import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'restaurant',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Restaurant = require('./containers/RestaurantContainer').default
      const reducer = require('./modules/restaurant').default

      /*  Add the reducer to the store on key 'restaurant'  */
      injectReducer(store, { key: 'restaurant', reducer })

      /*  Return getComponent   */
      cb(null, Restaurant)

    /* Webpack named bundle   */
    }, 'restaurant')
  }
})
