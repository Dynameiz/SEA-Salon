import React from 'react'
import { motion } from 'framer-motion'

export const Navbar = () => {

    return (
        <>
            <nav className='navbar flex items-center justify-between fixed w-full z-10 mr-4 ml-4'>
                <div className="flex flex-shrink-0 items-center pl-20 bg-transparent">
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                        
                    >
                        <a href="#" className='flex flex-row items-center bg-transparent text-3xl'>
                            <img src="../../src/assets/sea_salon_logo_black.svg" alt="sea-salon-logo" className='logo bg-transparent' />
                            SEA Salon
                        </a>
                    </motion.button>
                </div>
                <div className="m-8 flex items-center justify-center gap-16 text-xl pr-20 bg-transparent">
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                        className='bg-transparent'
                    >
                        H O M E
                    </motion.button>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                        className='bg-transparent'
                    >
                        S E R V I C E S
                    </motion.button>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                        className='bg-transparent'
                    >
                        R E V I E W
                    </motion.button>
                </div>
            </nav>
        </>
    )
}
