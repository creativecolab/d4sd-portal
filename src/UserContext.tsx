import * as React from 'react';
import firebase from 'firebase';

// set UserContext and add type
const UserContext = React.createContext({} as
  { user: firebase.User | null });

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;
