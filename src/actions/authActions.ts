import { replace } from 'connected-react-router';
import { AUTH_ERROR, AUTH_USER } from './types';

export function loginFirebaseUser(userObject: any) {
  return function (dispatch: any) {
    const user = {
      email: userObject.email,
      password: userObject.password,
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        dispatch({ type: 'LOGIN_FIRESTORE_USER', payload: user });
        console.log(user);
      })
      .catch((err) => {
        console.log('An error ocurred');
      });
  };
}
