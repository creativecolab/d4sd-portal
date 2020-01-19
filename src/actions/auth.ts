import * as firebase from 'firebase/app';
import 'firebase/auth';
import { useContext, useState, useEffect } from 'react';
import { message } from '@d4sd/components/index';
import userContext from '../UserContext';

export const useSession = () => {
  const { loggedIn, user } = useContext(userContext);
  return { loggedIn, user };
};

export const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser;
    return { loggedIn: true, user };
  });

  function onChange(user: any) {
    console.log('auth state changed');
    console.log(user.displayName);
    setState({ loggedIn: !!user, user });
  }

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return state;
};

export const register = async (
  firstName: string, lastName: string, email: string, password: string) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    if (error.code === 'auth/weak-password') {
      message.error('The password is too weak.');
      // eslint-disable-next-line
      console.log('The password is too weak.');
    } else {
      // eslint-disable-next-line
      console.log(error.message);
    }
    // eslint-disable-next-line
    console.log(error);
  }
};

// const provider = new firebase.auth.GoogleAuthProvider();
//
// export const loginWithGoogle = async () => {
//   try {
//     const result = await firebase.auth().signInWithPopup(provider);
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };
//
// const github = new firebase.auth.GithubAuthProvider();
//
// export const loginWithGithub = async () => {
//   try {
//     const result = await firebase.auth().signInWithPopup(github);
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };

export const loginWithEmail = async (email: string, password: string) => {
  try {
    const results = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// export const createUserWithEmail = async (email: string, password: string) => {
//   try {
//     await firebase.auth().createUserWithEmailAndPassword(email, password);
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };

export const signOut = () => firebase.auth().signOut();
