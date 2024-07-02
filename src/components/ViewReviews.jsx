import { motion } from "framer-motion"
import { useContext } from "react"
import { ToggleComponent } from "../context/ToggleComponent"

export const ViewReviews = () => {

  const {showAllReviews, setShowAllReviews} = useContext(ToggleComponent);

  return (
    <>
      <motion.div
            initial={{scale:0.5}}
            animate={{scale:1}}
            exit={{opacity:0, scale:0.5, transition: {duration: 0.2}}}
            transition={{type: 'spring'}}
            className="fixed bg-transparent w-full h-screen flex flex-col items-center justify-center overflow-hidden z-10 poppins-regular"
        >
          <div className="w-[70%] h-[80%] z-10 bg-white rounded-md">

          </div>

          <div className="w-full h-[100vh] fixed z-[5] bg-transparent" onClick={() => setShowAllReviews(!showAllReviews)}>
          </div>
        </motion.div>
    </>
  )
}
