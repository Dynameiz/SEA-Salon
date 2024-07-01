import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { auth } from '../firebase_sdk'

export const AdminNavbar = () => {
  return (
    <>
        <nav className='fixed flex flex-row justify-between w-full px-20 pt-8 poppins-regular'>
            <h1 className='bg-transparent text-3xl'>Welcome to Admin Dashboard</h1>
            <motion.button className='bg-transparent border-[2px] px-3 py-2 rounded-md divide'
                whileTap={{ scale:0.9 }}
                onClick={async() => {
                await auth.signOut();
            }}>
                Sign Out
            </motion.button>
        </nav>
    </>
  )
}