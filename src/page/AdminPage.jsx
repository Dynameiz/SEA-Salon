import { motion, AnimatePresence } from "framer-motion";
import { Element } from "react-scroll";
import { AdminNavbar } from "../components/AdminNavbar";
import { FaStar, FaRegNoteSticky, FaLocationDot, FaScissors } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AddBranches } from "../components/AddBranches";
import { AddServices } from "../components/AddServices";
import { ViewReviews } from "../components/ViewReviews";
import { ViewReservations } from "../components/ViewReservations";
import { ToggleComponent } from "../context/ToggleComponent";
import { AuthContext } from "../context/AuthContext";

export const AdminPage = () => {

  const { showAddBranches, setShowAddBranches, showAddServices, setShowAddServices, showAllReviews, setShowAllReviews, showAllReservations, setShowAllReservations } = useContext(ToggleComponent);
  const { getReviewData } = useContext(AuthContext);

  const [branchLogoHover, setBranchLogoHover] = useState(false);
  const [serviceLogoHover, setServiceLogoHover] = useState(false);
  const [reviewsLogoHover, setReviewsLogoHover] = useState(false);
  const [reservationsLogoHover, setReservationsLogoHover] = useState(false);

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
                onMouseEnter={() => setBranchLogoHover(!branchLogoHover)}
                onMouseLeave={() => setBranchLogoHover(!branchLogoHover)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                onClick={() => {
                  setShowAddBranches(!showAddBranches);
                }}
              >
                <FaLocationDot size={48} color={branchLogoHover ? '#f65314' : '#000000'}/>
                <h1 className="text-2xl">Add Branch</h1>
              </motion.button>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-3">
              <motion.button
                className="flex flex-col items-center justify-center gap-4 p-3 border-[2px] rounded-md w-[35vh] h-[25vh] bg-[#f8f8f8]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                onMouseEnter={() => setServiceLogoHover(!serviceLogoHover)}
                onMouseLeave={() => setServiceLogoHover(!serviceLogoHover)}
                onClick={() => {
                  setShowAddServices(!showAddServices);
                }}
              >
                <FaScissors size={48} color={serviceLogoHover ? '#7cbb00' : '#000000'}/>
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
                onMouseEnter={() => setReviewsLogoHover(!reviewsLogoHover)}
                onMouseLeave={() => setReviewsLogoHover(!reviewsLogoHover)}
                onClick={() => {
                  getReviewData();
                  setShowAllReviews(!showAllReviews);
                }}
              >
                <FaStar size={48} color={reviewsLogoHover ? '#00a1f1' : '#000000'}/>
                <h1 className="text-2xl">View Reviews</h1>
              </motion.button>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-3">
              <motion.button
                className="flex flex-col items-center justify-center gap-4 p-3 border-[2px] rounded-md w-[35vh] h-[25vh] bg-[#f8f8f8]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                onMouseEnter={() => setReservationsLogoHover(!reservationsLogoHover)}
                onMouseLeave={() => setReservationsLogoHover(!reservationsLogoHover)}
                onClick={() => {
                  setShowAllReservations(!showAllReservations);
                }}
              >
                <FaRegNoteSticky size={48} color={reservationsLogoHover ? '#ffbb00' : '#000000'}/>
                <h1 className="text-2xl">View Reservations</h1>
              </motion.button>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};
