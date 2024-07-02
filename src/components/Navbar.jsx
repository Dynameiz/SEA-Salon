import { useContext, useState } from 'react'
import { ToggleComponent } from '../context/ToggleComponent'
import { AuthContext } from '../context/AuthContext'
import { AnimatePresence, motion } from 'framer-motion'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { auth } from '../firebase_sdk'

import logo from '../../public/sea_salon_logo_black.svg'

const enterTop = {
    before: {
        y: -25,
        opacity: 0,
    },
    after: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            staggerChildren: 0.1,
        }
    },
  };

export const Navbar = () => {
    const { showRegister, setShowRegister } = useContext(ToggleComponent);
    const { currentUser, userData } = useContext(AuthContext);
    const [ showName, setShowName ] = useState(false);
    const [ showLogOut, setShowLogOut ] = useState(false);

    return (
        <>
            <nav className='navbar flex items-center justify-between fixed w-full z-10 sele selection:bg-black selection:text-neutral-100 overflow-hidden'>
                <div className="flex flex-shrink-0 items-center pl-20 bg-transparent overflow-hidden mx-4">
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                        className='bg-transparent z-10'
                    >
                        <Link to='homepage' smooth={true} duration={500} className='flex flex-row items-center bg-transparent text-3xl p-3'>
                            <img src={logo} alt="sea-salon-logo" className='logo bg-transparent' draggable='false'/>
                            SEA Salon
                        </Link>
                    </motion.button>
                </div>
                <div className="m-8 flex items-center justify-center gap-16 text-xl pr-20 bg-transparent">
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                    >
                        <Link to='homepage' smooth={true} duration={500} className='bg-transparent overflow-hidden'>
                        H O M E
                        </Link>
                    </motion.button>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                    >
                        <Link to='services' smooth={true} duration={500} offset={-40} className='bg-transparent overflow-hidden'>
                        S E R V I C E S
                        </Link>
                    </motion.button>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                    >
                        <Link to='review' smooth={true} duration={500} className='bg-transparent overflow-hidden'>
                        R E V I E W
                        </Link>
                    </motion.button>
                    <div className='flex flex-col justify-center items-center'>
                        <motion.button
                            initial={{opacity: 0.8}}
                            whileHover={{opacity:1, scale: 1.1}}
                            whileTap={{opacity: 1, scale: 1}}
                            transition={{type:"spring", stiffness: 400, damping: 17}}
                            className='bg-transparent z-10'
                            onHoverStart={() => {setShowName(false)}}
                            onHoverEnd={() => {setShowName(true)}}
                            onClick={() => {
                                (!currentUser) ? setShowRegister(!showRegister) : setShowLogOut(!showLogOut)
                            }}
                        >
                            <FaUserCircle size={32}/>
                        </motion.button>
                        <AnimatePresence>{showLogOut ? 
                            <motion.div
                                variants={enterTop}
                                initial='before'
                                animate='after'
                                exit={{ 
                                    y: -25, 
                                    opacity: 0,  
                                    transition: {
                                        duration: 0.3,
                                        staggerChildren: 0.1,
                                }}}
                                
                                className='fixed bg-transparent z-[8] flex flex-col justify-center items-center pt-28'
                            >
                                <p>{userData.name}</p>
                                <motion.button className='bg-transparent border-[2px] px-3 py-2 rounded-md'
                                whileTap={{ scale:0.9 }}
                                onClick={async() => {
                                    await auth.signOut();
                                    setShowLogOut(false);
                                }}>
                                    Sign Out
                                </motion.button>
                            </motion.div> 
                            : null}
                        </AnimatePresence>
                    </div>
                    
                </div>
            </nav>
                
            
        </>
    )
}
