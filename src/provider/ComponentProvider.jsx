import { useState } from "react";
import { ToggleComponent } from "../context/ToggleComponent";

export const ComponentProvider = ({children}) => {
    const [showReservation, setShowReservation] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [showAddBranches, setShowAddBranches] = useState(false);
    const [showAddServices, setShowAddServices] = useState(false);
    const [showAllReviews, setShowAllReviews] = useState(false);
    const [showAllReservations, setShowAllReservations] = useState(false);

    return <ToggleComponent.Provider value={{showReservation, setShowReservation, showRegister, setShowRegister, showLogin, setShowLogin, loading, setLoading, showAddBranches, setShowAddBranches, showAddServices, setShowAddServices, showAllReviews, setShowAllReviews, showAllReservations, setShowAllReservations }}>{children}</ToggleComponent.Provider>
};
