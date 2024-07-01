import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { AdminNavbar } from '../components/AdminNavbar'
import { Navbar } from '../components/Navbar'
import { FaStar, FaRegNoteSticky, FaLocationDot, FaScissors } from 'react-icons/fa6'

export const AdminPage = () => {
  return (
    <>
        <AdminNavbar />
        <Element name='admin-page' className='w-full h-[100vh] justify-center items-center'>
          <div className='flex flex-col justify-center w-full h-[100vh] items-center gap-4'>
            <div className='flex flex-row justify-center w-full items-center gap-4'>
              <div className='flex flex-col items-center justify-center gap-4 p-3'>
                  <motion.button
                    className='flex flex-col items-center justify-center gap-4 p-3 border-[2px] rounded-md w-[35vh] h-[25vh]'
                    whileHover={{scale:1.1}}
                    whileTap={{scale:1}}
                  >
                    <FaLocationDot size={48}/>
                    <h1 className='text-2xl'>Add Branch</h1>
                  </motion.button>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 p-3'>
                  <motion.button
                    className='flex flex-col items-center justify-center gap-4 p-3 border-[2px] rounded-md w-[35vh] h-[25vh]'
                    whileHover={{scale:1.1}}
                    whileTap={{scale:1}}
                  >
                    <FaScissors size={48}/>
                    <h1 className='text-2xl'>Add Services</h1>
                  </motion.button>
                  
                </div>
              </div>
            <div className='flex flex-row justify-center w-full items-center gap-4'>
              <div className='flex flex-col items-center justify-center gap-4 p-3'>
                <motion.button
                  className='flex flex-col items-center justify-center gap-4 p-3 border-[2px] rounded-md w-[35vh] h-[25vh]'
                  whileHover={{scale:1.1}}
                  whileTap={{scale:1}}
                >
                  <FaStar size={48}/>
                  <h1 className='text-2xl'>View Reviews</h1>
                </motion.button>
              </div>
              <div className='flex flex-col items-center justify-center gap-4 p-3'>
                <motion.button
                  className='flex flex-col items-center justify-center gap-4 p-3 border-[2px] rounded-md w-[35vh] h-[25vh]'
                  whileHover={{scale:1.1}}
                  whileTap={{scale:1}}
                >
                  <FaRegNoteSticky size={48}/>
                  <h1 className='text-2xl'>View Reservations</h1>
                </motion.button>
              </div>
            </div>
          </div>

        </Element>
    </>
  )
}
