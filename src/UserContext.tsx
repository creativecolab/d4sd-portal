import * as React from 'react';

// set UserContext and add type
const UserContext = React.createContext({} as
  {user: {token: string; username: string; loggedIn: boolean}; setUser: Function});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;
