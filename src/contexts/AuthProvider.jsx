import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

// createContext should be invoked to create a context object
const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // create user using email
    const signUpWithGmail = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // login
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout 
    const logOut=()=>{
        return signOut(auth);
    }

    // user available or not
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentuser=>{
            setUser(currentuser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    })

  const authInfo = {
    user,
    loading,
    createUser,
    signUpWithGmail,
    login,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
