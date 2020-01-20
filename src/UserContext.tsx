import * as React from 'react';

interface UserContext {
  loggedIn?: boolean;
  user: firebase.User | null;
}

const userContext = React.createContext<UserContext>({
  loggedIn: false,
  user: null
});

export default userContext;
