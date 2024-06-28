import { useState } from "react";
import { ToggleComponent } from "../context/ToggleComponent";

export const ComponentProvider = ({children}) => {
    const [showReservation, setShowReservation] = useState(false);

    return <ToggleComponent.Provider value={{showReservation, setShowReservation}}>{children}</ToggleComponent.Provider>
};
