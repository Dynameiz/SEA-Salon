import { useEffect, useState } from "react";
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase_sdk';
import { onAuthStateChanged } from "firebase/auth";

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setCurrentUser(firebaseUser);
          });
      
          return unsubscribe;
    }, [])

    return <AuthContext.Provider value={{ currentUser, userData, setUserData }}>{children}</AuthContext.Provider>

}