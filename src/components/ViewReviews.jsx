import { motion } from "framer-motion"
import { useContext } from "react"
import { ToggleComponent } from "../context/ToggleComponent"
import { FaStar, FaXmark, FaArrowRotateRight } from "react-icons/fa6"
import { AuthContext } from "../context/AuthContext"

export const ViewReviews = () => {

  const {showAllReviews, setShowAllReviews, setLoading} = useContext(ToggleComponent);
  const {reviewData, getReviewData} = useContext(AuthContext);

  const loadReview = async() => {
    setLoading(true);
    setTimeout(() => {
      getReviewData();
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
              <h1 className="bg-transparent text-2xl">Reviews</h1>
              <div className="flex flex-row justify-center bg-transparent items-center gap-7">
                <motion.button
                  className="bg-transparent"
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.8, rotate:360}}
                  onClick={() => {loadReview()}}
                >
                  <FaArrowRotateRight className="bg-transparent" size={24}/>
                </motion.button>
                <motion.button
                  className="bg-transparent"
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.8}}
                  onClick={() => {setShowAllReviews(!showAllReviews)}}
                >
                  <FaXmark className="bg-transparent" size={24}/>
                </motion.button>
              </div>
            </div>
            <div className="flex flex-col bg-transparent px-2 pt-4 divide-y overflow-y-scroll overflow-hidden h-[95%]">
              {reviewData.map((reviews, index) => {
                return (
                  <div key={index} className=" border-black bg-transparent">
                    <div className="text-xl bg-transparent">{reviews.name}</div>
                    <div className="flex bg-transparent">

                      <FaStar color={reviews.rating > 0 ? '#ffbb00' : 'gray'} className="bg-transparent"/>
                      <FaStar color={reviews.rating > 1 ? '#ffbb00' : 'gray'} className="bg-transparent"/>
                      <FaStar color={reviews.rating > 2 ? '#ffbb00' : 'gray'} className="bg-transparent"/>
                      <FaStar color={reviews.rating > 3 ? '#ffbb00' : 'gray'} className="bg-transparent"/>
                      <FaStar color={reviews.rating > 4 ? '#ffbb00' : 'gray'} className="bg-transparent"/>
        
                    </div>
                    <div className="bg-transparent pt-3">{reviews.comment}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="w-full h-[100vh] fixed z-[5] bg-transparent" onClick={() => setShowAllReviews(!showAllReviews)}>
          </div>
        </motion.div>
    </>
  )
}
