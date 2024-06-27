import React from 'react'
import { motion } from 'framer-motion'

export const Navbar = () => {

    return (
        <>
            <nav className='navbar bg-transparent flex items-center justify-between fixed w-full z-10 mr-4 ml-4'>
                <div className="flex flex-shrink-0 items-center pl-20 bg-transparent">
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1}}
                        transition={{type:"spring", stiffness: 400, damping: 17}}
                        className='flex flex-row items-center bg-transparent text-3xl'
                    >
                        <svg width="50" height="50" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.8381 2C49.6983 8.92496 43.2035 17.9178 40.7916 28.4069C38.821 36.9765 40.6475 46.3626 36.8672 54.4935C34.8332 58.8682 31.9038 62.6743 28.3877 66C24.9246 69.2756 21.0706 71.6226 17 74" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        <path d="M57.4102 2.76362C57.263 3.20953 56.7999 3.59356 56.5458 3.98199C55.7127 5.25589 54.8868 6.5222 54.0214 7.77536C51.1514 11.9308 48.837 16.6052 46.8501 21.2466C44.9305 25.7308 43.1725 30.4563 42.7767 35.3572C42.5063 38.7064 42.1277 42.0288 41.7841 45.3721C41.4625 48.5012 40.8246 51.5893 39.3623 54.4019C38.1106 56.8092 36.2524 59.0995 34.4246 61.0899C32.3967 63.2982 30.0081 65.3029 27.6042 67.0781C26.7184 67.7322 25.6977 68.8572 24.7545 69.3334" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        <path d="M58.9417 17.8961C51.8256 19.8415 50.086 28.5898 50.9178 34.9177C51.374 38.388 52.7556 41.6256 53.388 45.0563C54.2222 49.5809 54.1754 54.4826 52.3194 58.7965C48.9638 66.5956 40.4833 68.2649 33.0829 70.2597" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        <path d="M50.7425 30.3636C50.6473 32.9046 50.2798 35.458 50.1118 38C49.8754 41.5786 49.5894 45.1026 49.0081 48.6494C47.7359 56.4116 43.9574 66.8714 35.2903 69.013" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        <path d="M24.8837 63.0909C23.9023 62.8969 23.2029 62.0375 22.5711 61.342C21.0305 59.6462 20.2635 58.1295 19.768 55.8961C19.0206 52.5277 19.8695 49.8504 21.555 46.8831C22.0533 46.0057 22.8483 44.0953 24.1479 44.0953C24.7459 44.0953 23.4188 46.5868 23.3507 46.7446C22.6748 48.3115 20.8368 51.1231 22.5711 52.5801C24.3252 54.0538 26.4652 53.455 27.5379 51.5238C28.6489 49.5238 28.9955 47.1424 29.3512 44.9264C29.7904 42.1894 30.2174 39.473 30.7177 36.7533" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        <path d="M24.7545 63.2816C25.3488 62.5383 26.0725 61.9273 26.6904 61.2053C27.922 59.7659 28.748 58.0115 29.2973 56.1977C31.1262 50.1585 30.9314 43.3092 30.7944 37.0571" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        </svg>

                        SEA Salon
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
