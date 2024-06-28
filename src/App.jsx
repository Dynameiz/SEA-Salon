import './App.scss'
import { useState, useRef } from 'react';
import { Navbar } from './components/Navbar'
import { motion, useInView } from 'framer-motion'
import { Element } from 'react-scroll';
import { FaStar } from 'react-icons/fa6';

const imgEnter = {
  before: {
      y: 150,
      opacity: 0,
  },
  after: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 1,
          staggerChildren: 0.1,
      }
  },
};

const leftTextEnter = {
  before: {
    x: -100,
    opacity: 0,
  },
  after: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
};

const rightTextEnter = {
  before: {
    x: 100,
    opacity: 0,
  },
  after: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
};

function App() {

  const [highlight, setHighlight] = useState(0);
  const [starReview, setStarReview] = useState(0);
  const [comment, setComment] = useState("");

  const servicesRef = useRef();
  const serviceIsInView = useInView(servicesRef, {margin:'-100px'});

  const reviewRef = useRef();
  const reviewIsInView = useInView(reviewRef, {margin:'-100px'});

  return (
    <>
      <Navbar/>
      <Element name='homepage'>
        <section className='home-page items-center justify-center flex w-full selection:bg-black selection:text-neutral-100'>
          <div className="absolute flex items-center justify-center gap-16 w-full">
            <motion.div
              variants={leftTextEnter}
              initial='before'
              animate='after'
              className='left-text flex flex-col justify-center items-center unna-regular'
            >
              <h1 className='text-6xl'>SEA Salon</h1>
            </motion.div>
            <motion.div
              variants={imgEnter}
              initial='before'
              animate='after'
              className='image flex flex-col justify-center items-center'
            >
              <img src="./src/assets/model.png" alt="model" className='model' draggable='false'/>
            </motion.div>
            <motion.div
              variants={rightTextEnter}
              initial='before'
              animate='after'
              className='right-text flex flex-col justify-center items-center unna-regular'
            >
              <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl'>Beauty and Elegance</h2>
                <h1 className='text-6xl pb-6'>Redefined</h1>
                <motion.button
                  whileTap={{scale: 0.9}}
                  className='btn text-black p-2 text-2xl rounded-lg'
                >
                  Reservation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </Element>

      <section className='divider'></section>

      <Element name='services'>

        <section className='services items-center justify-center flex flex-col w-full'>
          <motion.h1
            variants={imgEnter}
            ref={servicesRef}
            initial='before'
            animate={serviceIsInView && 'after'}
            className='services-text text-5xl pb-5'
          >
            S E R V I C E S
          </motion.h1>
          <div className='container items-center justify-center flex w-full gap-16'>
            <motion.div
              variants={imgEnter}
              ref={servicesRef}
              initial='before'
              animate={serviceIsInView && 'after'}
              className="max-w-xs bg-white border border-gray-200 rounded-lg shadow"
            >
          
              <img className="img1 rounded-t-lg" src="./src/assets/styling.jpeg" alt="styling" draggable='false' />
          
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Haircut and Styling</h5>
                  <p className="mb-3 font-normal text-gray-700">A Modern and stylish haircut, expert styling, and vibrant coloring to enhance your look.</p>
              </div>
            </motion.div>
            <motion.div
              variants={imgEnter}
              ref={servicesRef}
              initial='before'
              animate={serviceIsInView && 'after'}
              className="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
          
              <img className="img2 rounded-t-lg" src="./src/assets/manicure_n_pedicure.jpeg" alt="manicure and pedicure" draggable='false'/>
          
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Manicure and Pedicure</h5>
                  <p className="mb-3 font-normal text-gray-700">Expert nail shaping, cuticle care, and polish for perfectly groomed hands and feet.</p>
              </div>
            </motion.div>
            <motion.div
              variants={imgEnter}
              ref={servicesRef}
              initial='before'
              animate={serviceIsInView && 'after'}
              className="max-w-xs bg-white border border-gray-200 rounded-lg shadow"
            >
          
              <img className="img3 rounded-t-lg" src="./src/assets/facial_treatment.jpeg" alt="facial-treatment" draggable='false'/>
          
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Facial Treatments</h5>
                  <p className="mb-3 font-normal text-gray-700">Rejuvenating facials that cleanse, exfoliate, and hydrate for a radiant glow.</p>
              </div>
            </motion.div>

          </div>
        </section>
      </Element>

      <Element name='review'>
        <section className='review flex flex-col items-center justify-center'>
          <motion.h1
            variants={imgEnter}
            ref={reviewRef}
            initial='before'
            animate={reviewIsInView && 'after'}
            className='review-text bg-transparent text-5xl pb-20'
          >
            R E V I E W S
          </motion.h1>
          <div className='flex flex-row justify-center items-center gap-32'>

            <div className='review-container flex flex-col justify-center items-center'>

              <motion.h2
                variants={imgEnter}
                ref={reviewRef}
                initial='before'
                animate={reviewIsInView && 'after'}
                className='review-text bg-transparent text-3xl pb-10'
              >
                Your feedback means a lot to us
              </motion.h2>
              <motion.div
                ref={reviewRef}
                variants={imgEnter}
                initial='before'
                animate={reviewIsInView && 'after'}
                className='flex flex-row justify-center gap-8 pb-8'
              >
                <button onClick={() => setStarReview(1)} onMouseEnter={() => setHighlight(1)} onMouseLeave={() => setHighlight(0) && setStarReview(0)}> <FaStar color={`${highlight > 0 || starReview > 0 ? 'black' : 'gray'}`} size={64}/> </button>
                <button onClick={() => setStarReview(2)} onMouseEnter={() => setHighlight(2)} onMouseLeave={() => setHighlight(0) && setStarReview(0)}> <FaStar color={`${highlight > 1 || starReview > 1 ? 'black' : 'gray'}`} size={64}/> </button>
                <button onClick={() => setStarReview(3)} onMouseEnter={() => setHighlight(3)} onMouseLeave={() => setHighlight(0) && setStarReview(0)}> <FaStar color={`${highlight > 2 || starReview > 2 ? 'black' : 'gray'}`} size={64}/> </button>
                <button onClick={() => setStarReview(4)} onMouseEnter={() => setHighlight(4)} onMouseLeave={() => setHighlight(0) && setStarReview(0)}> <FaStar color={`${highlight > 3 || starReview > 3 ? 'black' : 'gray'}`} size={64}/> </button>
                <button onClick={() => setStarReview(5)} onMouseEnter={() => setHighlight(5)} onMouseLeave={() => setHighlight(0) && setStarReview(0)}> <FaStar color={`${highlight > 4 || starReview > 4 ? 'black' : 'gray'}`} size={64}/> </button>
              </motion.div>  
            </div>

            <div className='flex flex-col justify-center items-end gap-y-2'>
              <motion.textarea
                value={comment}
                onChange={(e) => {setComment(e.target.value)}}
                placeholder='Comments'
                variants={imgEnter}
                ref={reviewRef}
                initial="before"
                animate={reviewIsInView && "after"}
                className='rounded-md min-w-[60vh] min-h-[20vh] p-3 border-[2px]' />
              <motion.button
                variants={imgEnter}
                ref={reviewRef}
                initial="before"
                animate={reviewIsInView && "after"}
                whileTap={{scale: 0.9}}
                className='review-text btn text-black p-2 text-md rounded-lg'
              >
                Submit
              </motion.button>
            </div>
          </div>
        </section>
      </Element>

      <footer className='bg-black h-48'>
        
      </footer>
    </>
  )
}

export default App
