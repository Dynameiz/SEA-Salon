import React from 'react'
import { motion } from 'framer-motion'

export const Navbar = () => {

    return (
        <>
            <nav className='navbar bg-transparent flex items-center justify-between fixed w-full z-10 mr-4 ml-4'>
                <div className="flex flex-shrink-0 items-center pl-20">
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                    >
                        <h1 className='text-3xl'>SEA Salon</h1>
                    </motion.button>
                </div>
                <div className="m-8 flex items-center justify-center gap-16 text-xl pr-20">
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                    >
                        <h1>H O M E</h1>
                    </motion.button>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                    >
                        <h1>S E R V I C E S</h1>
                    </motion.button>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                    >
                        <h1>R E V I E W</h1>
                    </motion.button>
                </div>
            </nav>
        </>
    )
}
