import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user 
    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in user
    const LoginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // for log out
    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const UnSubcribe = onAuthStateChanged(auth, loggedUser => {
            console.log('log out user', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            UnSubcribe();
        }
    }, []);

    //authprovider information
    const authInfo = {
        user,
        CreateUser,
        LoginUser,
        LogOut,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;