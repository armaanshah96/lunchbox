// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const CHECK_RESTAURANT = 'CHECK_RESTAURANT'

// ------------------------------------
// Actions
// ------------------------------------
export function check (isChecked, restaurantId) {
  console.log(isChecked, restaurantId)
  return {
    type    : CHECK_RESTAURANT,
    payload : { isChecked, restaurantId }
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  check
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2,
  [CHECK_RESTAURANT]: (state, action) => {
    console.log(state)
    state.selectedId = action.payload.isChecked ?
      action.payload.restaurantId :
      "";
    return state;
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  selectedId: "",
  restaurants: []
}
export default function restaurantReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
