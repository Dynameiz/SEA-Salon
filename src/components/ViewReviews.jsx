import { motion } from "framer-motion"
import { useContext } from "react"
import { ToggleComponent } from "../context/ToggleComponent"
import { FaXmark } from "react-icons/fa6"

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
          <div className="w-[70%] h-[80%] z-10 bg-white rounded-md divide-y-2 border-black items-center p-5">
            <div className="flex flex-row justify-between bg-transparent items-center px-2">
              <h1 className="bg-transparent text-2xl">Reviews</h1>
              <motion.button
                className="bg-transparent"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.8}}
                onClick={() => {setShowAllReviews(!showAllReviews)}}
              >
                <FaXmark className="bg-transparent" size={24}/>
              </motion.button>
            </div>
            <div className="flex flex-col bg-transparent px-2 pt-4">
              Review list
            </div>
          </div>

          <div className="w-full h-[100vh] fixed z-[5] bg-transparent" onClick={() => setShowAllReviews(!showAllReviews)}>
          </div>
        </motion.div>
    </>
  )
}
