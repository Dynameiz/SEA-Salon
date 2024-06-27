import './App.scss'
import { Navbar } from './components/Navbar'
import { motion } from 'framer-motion'

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
      <section className='services'>

      </section>
      <section className='contact-details'>
        
      </section>
    </>
  )
}

export default App
