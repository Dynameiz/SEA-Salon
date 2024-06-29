import { useState } from "react";
import { ToggleComponent } from "../context/ToggleComponent";

export const ComponentProvider = ({children}) => {
    const [showReservation, setShowReservation] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return <ToggleComponent.Provider value={{showReservation, setShowReservation, showRegister, setShowRegister, showLogin, setShowLogin }}>{children}</ToggleComponent.Provider>
};
