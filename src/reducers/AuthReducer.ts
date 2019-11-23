import { AUTH_ERROR, AUTH_USER, UNAUTH_USER } from '../actions/types';

interface StateInterface {
  authenticated: boolean;
  error: boolean;
}

const InitialState: StateInterface = {
  authenticated: false,
  error: false,
};

const AuthReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case AUTH_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case AUTH_USER:
      return {
        ...state,
        authenticated: true,
      };
    case UNAUTH_USER:
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
