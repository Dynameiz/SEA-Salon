import React from 'react'
import { motion } from 'framer-motion'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-scroll'

export const Navbar = () => {

    return (
        <>
            <nav className='navbar flex items-center justify-between fixed w-full z-10 mr-4 ml-4 sele selection:none selection:none'>
                <div className="flex flex-shrink-0 items-center pl-20 bg-transparent">
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                        
                    >
                        <Link to='homepage' smooth={true} duration={500} className='flex flex-row items-center bg-transparent text-3xl'>
                            <img src="../../src/assets/sea_salon_logo_black.svg" alt="sea-salon-logo" className='logo bg-transparent' draggable='false'/>
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
                        <Link to='homepage' smooth={true} duration={500} className='bg-transparent'>
                        H O M E
                        </Link>
                    </motion.button>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                    >
                        <Link to='services' smooth={true} duration={500} offset={-40} className='bg-transparent'>
                        S E R V I C E S
                        </Link>
                    </motion.button>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                    >
                        <Link to='review' smooth={true} duration={500} className='bg-transparent'>
                        R E V I E W
                        </Link>
                    </motion.button>
                    <motion.button
                        initial={{opacity: 0.8}}
                        whileHover={{opacity:1, scale: 1.1}}
                        whileTap={{opacity: 1, scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                        className='bg-transparent'
                    >
                        <FaUserCircle size={32}/>
                    </motion.button>
                </div>
            </nav>
        </>
    )
}
