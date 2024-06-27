import './App.scss'
import { useRef } from 'react';
import { Navbar } from './components/Navbar'
import { motion, useInView } from 'framer-motion'

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

  const ref = useRef();
  const isInView = useInView(ref, {margin:'-100px'});

  return (
    <>
      <Navbar/>
      <section className='home-page items-center justify-center flex w-full'>
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
            <img src="./src/assets/model.png" alt="model" className='model'/>
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
                className='reserve-btn text-black p-2 text-2xl'
              >
                Reservation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='services items-center justify-center flex flex-col w-full'>
        <motion.h1
          variants={imgEnter}
          ref={ref}
          initial='before'
          animate={isInView && 'after'}
          className='services-text text-6xl pb-10'
        >
          S E R V I C E S
        </motion.h1>
        <div className='container items-center justify-center flex w-full gap-16'>
          <motion.div
            variants={imgEnter}
            ref={ref}
            initial='before'
            animate={isInView && 'after'}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
          >
        
            <img className="img1 rounded-t-lg" src="./src/assets/styling.jpeg" alt="styling" />
        
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Haircut and Styling</h5>
                <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </motion.div>
          <motion.div
            variants={imgEnter}
            ref={ref}
            initial='before'
            animate={isInView && 'after'}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        
            <img className="img2 rounded-t-lg" src="./src/assets/manicure_n_pedicure.jpeg" alt="manicure and pedicure" />
        
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Manicure and Pedicure</h5>
                <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </motion.div>
          <motion.div
            variants={imgEnter}
            ref={ref}
            initial='before'
            animate={isInView && 'after'}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
          >
        
            <img className="img3 rounded-t-lg" src="./src/assets/facial_treatment.jpeg" alt="facial-treatment" />
        
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Facial Treatments</h5>
                <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className='contact-details'>
        
      </section>
    </>
  )
}

export default App
