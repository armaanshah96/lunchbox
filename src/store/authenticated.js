export default (state = false, action) => {
  console.log("REDUCER", action)
  switch (action.type) {
    case "IS_AUTHENTICATED":
      return action.payload;
    default:
      return state;
  }
}
