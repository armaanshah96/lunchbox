// crud operations
const database = firebase.database()

export function createUser (value) {
  const { userId } = value;

  return dispatch => {
    database.ref("/users").push(value)
  }
};


// authentication
export function authenticated () {
  const provider = new firebase.auth.GoogleAuthProvider();

  return dispatch => {
    const isAuthenticated = firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;

      return dispatch({ type: "IS_AUTHENTICATED", payload: true })
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;

      return dispatch({ type: "IS_AUTHENTICATED", payload: false })
    });
  }
}
