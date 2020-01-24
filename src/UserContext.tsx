import * as React from 'react';

export interface UserContext {
  loggedIn?: boolean;
  user: firebase.User | null;
}

const userContext = React.createContext<UserContext>({
  loggedIn: false,
  user: null
});

export default userContext;
