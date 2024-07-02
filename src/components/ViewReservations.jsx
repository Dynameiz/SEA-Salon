import { motion } from "framer-motion"
import { useContext } from "react"
import { ToggleComponent } from "../context/ToggleComponent"
import { FaXmark, FaArrowRotateRight } from "react-icons/fa6"
import { AuthContext } from "../context/AuthContext"

export const ViewReservations = () => {

  const {showAllReservations, setShowAllReservations, setLoading} = useContext(ToggleComponent);
  const {reservationData, getReservationData} = useContext(AuthContext);

  const loadReservation = async() => {
    setLoading(true);
    setTimeout(() => {
      getReservationData();
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      <motion.div
            initial={{scale:0.5}}
            animate={{scale:1}}
            exit={{opacity:0, scale:0.5, transition: {duration: 0.2}}}
            transition={{type: 'spring'}}
            className="fixed bg-transparent w-full h-screen flex flex-col items-center justify-center overflow-hidden z-10 poppins-regular"
        >
          <div className="w-[70%] h-[80%] z-10 bg-white rounded-md divide-y-2 border-black items-center p-5">
            <div className="flex flex-row justify-between bg-transparent items-center px-2">
              <h1 className="bg-transparent text-2xl">Reservation</h1>
              <div className="flex flex-row justify-center bg-transparent items-center gap-7">
                <motion.button
                  className="bg-transparent"
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.8, rotate:360}}
                  onClick={() => {loadReservation()}}
                >
                  <FaArrowRotateRight className="bg-transparent" size={24}/>
                </motion.button>
                <motion.button
                  className="bg-transparent"
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.8}}
                  onClick={() => {setShowAllReservations(!showAllReservations)}}
                >
                  <FaXmark className="bg-transparent" size={24}/>
                </motion.button>
              </div>
            </div>
            <div className="flex flex-col bg-transparent px-2 divide-y overflow-y-scroll overflow-hidden h-[95%]">
              {reservationData.map((reservations, index) => {
                return (
                  <div key={index} className="border-black bg-transparent">
                    <div className="pt-4 text-xl bg-transparent">{reservations.name} - {reservations.phoneNumber}</div>
                    <div className="bg-transparent">{reservations.service}</div>
                    <div className="bg-transparent">{reservations.date}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-full h-[100vh] fixed z-[5] bg-transparent" onClick={() => setShowAllReservations(!showAllReservations)}>
          </div>
        </motion.div>
    </>
  )
}
