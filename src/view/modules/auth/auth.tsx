import React, { Component, useState, useEffect } from 'react'
import app from '../../firebase';

export const AuthContext = React.createContext(defaultStatus);

export const AuthProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser]: any = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, [])
}

