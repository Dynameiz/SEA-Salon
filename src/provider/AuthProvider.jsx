import { useEffect, useState } from "react";
import { AuthContext } from '../context/AuthContext';
import { auth, db } from '../firebase_sdk';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const AuthProvider = ({children}) => {
    //Active User (for authentication purposes)
    const [currentUser, setCurrentUser] = useState(null);
    //User Data
    const [userData, setUserData] = useState(null);
    const [reviewData, setReviewData] = useState([]);
    const [reservationData, setReservationData] = useState([]);

    const checkAdmin = () => {
        try {
          return (userData.role === 'Admin');
        } catch (error) {
          return false;
        }
    }

    const getUserData = async(email) => {
        try {
            const getUserDocs = await getDoc(doc(db, 'users', email));
            if(getUserDocs.exists()){
                setUserData(getUserDocs.data());
            }
            console.log('Data does not exist');
        } catch (error) {
            console.log(error);
        }
    }

    const getReviewData = async () => {
        try {
          const getReviewDoc = await getDoc(doc(db, "user_input", "reviews"));
          if (getReviewDoc.exists()) {
            setReviewData(getReviewDoc.data().reviews);
          }
          console.log("No reviews yet");
        } catch (error) {
          console.error(error);
        }
    };

    const getReservationData = async () => {
        try {
          const getReservationDoc = await getDoc(doc(db, "user_input", "reservations"));
          if (getReservationDoc.exists()) {
            setReservationData(getReservationDoc.data().reservations);
          }
          console.log("No reservation has been made yet");
        } catch (error) {
          console.error(error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setCurrentUser(firebaseUser);
            getUserData(firebaseUser.email);
          });
      
          return unsubscribe;
    }, [])

    return <AuthContext.Provider value={{ currentUser, userData, setUserData, checkAdmin,reviewData, getReviewData,  setReviewData, reservationData, setReservationData, getReservationData }}>{children}</AuthContext.Provider>

}