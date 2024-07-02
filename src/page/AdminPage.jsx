import { motion, AnimatePresence } from "framer-motion";
import { Element } from "react-scroll";
import { AdminNavbar } from "../components/AdminNavbar";
import { FaStar, FaRegNoteSticky, FaLocationDot, FaScissors } from "react-icons/fa6";
import { useContext } from "react";
import { AddBranches } from "../components/AddBranches";
import { AddServices } from "../components/AddServices";
import { ViewReviews } from "../components/ViewReviews";
import { ViewReservations } from "../components/ViewReservations";
import { ToggleComponent } from "../context/ToggleComponent";

export const AdminPage = () => {

  const { showAddBranches, setShowAddBranches, showAddServices, setShowAddServices, showAllReviews, setShowAllReviews, showAllReservations, setShowAllReservations } = useContext(ToggleComponent);



  return (
    <>
      <AdminNavbar />

      <Element
        name="admin-page"
        className="w-full h-[100vh] justify-center items-center poppins-regular"
        >
        <AnimatePresence>{showAddBranches ? <AddBranches/> : null}</AnimatePresence>
        <AnimatePresence>{showAddServices ? <AddServices/> : null}</AnimatePresence>
        <AnimatePresence>{showAllReviews ? <ViewReviews/> : null}</AnimatePresence>
        <AnimatePresence>{showAllReservations ? <ViewReservations/> : null}</AnimatePresence>
        <div className="flex flex-col justify-center w-full h-[100vh] items-center gap-4">
          <div className="flex flex-row justify-center w-full items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4 p-3">
              <motion.button
                className="flex flex-col items-center justify-center gap-4 p-3 border-[2px] rounded-md w-[35vh] h-[25vh] bg-[#f8f8f8]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                onClick={() => {
                  setShowAddBranches(!showAddBranches);
                }}
              >
                <FaLocationDot size={48} />
                <h1 className="text-2xl">Add Branch</h1>
              </motion.button>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-3">
              <motion.button
                className="flex flex-col items-center justify-center gap-4 p-3 border-[2px] rounded-md w-[35vh] h-[25vh] bg-[#f8f8f8]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                onClick={() => {
                  setShowAddServices(!showAddServices);
                }}
              >
                <FaScissors size={48} />
                <h1 className="text-2xl">Add Services</h1>
              </motion.button>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4 p-3">
              <motion.button
                className="flex flex-col items-center justify-center gap-4 p-3 border-[2px] rounded-md w-[35vh] h-[25vh] bg-[#f8f8f8]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                onClick={() => {
                  setShowAllReviews(!showAllReviews);
                }}
              >
                <FaStar size={48} />
                <h1 className="text-2xl">View Reviews</h1>
              </motion.button>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-3">
              <motion.button
                className="flex flex-col items-center justify-center gap-4 p-3 border-[2px] rounded-md w-[35vh] h-[25vh] bg-[#f8f8f8]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                onClick={() => {
                  setShowAllReservations(!showAllReservations);
                }}
              >
                <FaRegNoteSticky size={48}/>
                <h1 className="text-2xl">View Reservations</h1>
              </motion.button>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};
