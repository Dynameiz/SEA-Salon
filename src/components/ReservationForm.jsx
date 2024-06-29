import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ToggleComponent } from "../context/ToggleComponent";

export const ReservationForm = () => {
  const { showReservation, setShowReservation } = useContext(ToggleComponent);

  const [ name, setName ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ service, setService ] = useState('Services');
  const [ date, setDate ] = useState('');

  const handleSubmit = () => {
    if(name === '' || phoneNumber === '' || service === 'Services' || date === ''){
      alert('Please fill out all of the field');
      return;
    }
    setShowReservation(!showReservation);
  }

  return (
    <>
        <motion.div
            initial={{scale:0.5}}
            animate={{scale:1}}
            exit={{opacity:0, scale:0.5}}
            transition={{type: 'spring'}}
            className="fixed bg-transparent w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden z-10 poppins-regular"
        >
            <div className="reservation-container z-10 min-w-[60vh] min-h-[70vh] bg-slate-100 flex flex-col items-center justify-center opacity-95 rounded-md border-black border-[4]">
                <h1 className="bg-transparent text-4xl pb-10">Reservation Form</h1>

                <div className="flex flex-col items-center justify-center gap-4 w-full">

                  <input type="text" class="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                  <input type="text" class="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Phone Number" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>

                  <select class="py-3 px-4 pe-9 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" value={service} onChange={(e) => {setService(e.target.value)}}>
                    <option selected="Services" disabled="true">Services</option>
                    <option value="haircut">Haircut</option>
                    <option value="styling">Styling</option>
                    <option value="manicure">Manicure</option>
                    <option value="pedicure">Pedicure</option>
                    <option value="face">Face Treatments</option>
                  </select>

                  <input type="datetime-local" className="py-3 px-4 pe-9 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" value={date} onChange={(e) => {setDate(e.target.value)}}/>

                  <button type="button" class="py-3 px-4 inline-flex items-center justify-center w-[80%] gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none" onClick={() => {handleSubmit()}}>
                    Submit
                  </button>
                </div>
                
            </div>
            <div className="w-full h-[100vh] fixed z-[5] bg-transparent" onClick={() => setShowReservation(!showReservation)}>
           </div>
        </motion.div>
        
    </>
  );
}
