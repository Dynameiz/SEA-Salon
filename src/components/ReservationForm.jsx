import { motion } from "framer-motion";
import { useContext } from "react";
import { ToggleComponent } from "../context/ToggleComponent";

export const ReservationForm = () => {
  const { showReservation, setShowReservation } = useContext(ToggleComponent);

  return (
    <>
        <motion.div
            initial={{scale:0.5}}
            animate={{scale:1}}
            exit={{opacity:0, scale:0.5}}
            transition={{type: 'spring'}}
            className="fixed bg-transparent w-full h-[100vh] z-10 flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="reservation-container min-w-[60vh] min-h-[70vh] bg-slate-100 flex flex-col items-center justify-center opacity-95 rounded-md border-black border-[4]">
                <h1 className="bg-transparent text-4xl pb-10">Reservation Form</h1>

                <div className="flex flex-col items-center justify-center gap-4 w-full">

                  <input type="text" class="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Name"/>
                  <input type="text" class="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Phone Number"/>

                  <select class="py-3 px-4 pe-9 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                    <option selected="" disabled="true">Services</option>
                    <option value="haircut">Haircut</option>
                    <option value="styling">Styling</option>
                    <option value="manicure">Manicure</option>
                    <option value="pedicure">Pedicure</option>
                    <option value="face">Face Treatments</option>
                  </select>

                  <input type="datetime-local" className="py-3 px-4 pe-9 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />

                  <button type="button" class="py-3 px-4 inline-flex items-center justify-center w-[80%] gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none" onClick={() => setShowReservation(!showReservation)}>
                    Submit
                  </button>
                  <button type="button" class="py-3 px-4 inline-flex items-center justify-center w-[80%] gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none" onClick={() => setShowReservation(!showReservation)}>
                    Cancel
                  </button>
                </div>

            </div>
        </motion.div>
    </>
  );
}
