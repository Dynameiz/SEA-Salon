import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ToggleComponent } from '../context/ToggleComponent';

export const RegisterForm = () => {
    const { showRegister, setShowRegister, showLogin, setShowLogin } = useContext(ToggleComponent);

    return (
        <motion.div
            initial={{scale:0.5}}
            animate={{scale:1}}
            exit={{opacity:0, scale:0.5}}
            transition={{type: 'spring'}}
            className="fixed bg-transparent w-full h-[100vh] z-10 flex flex-col items-center justify-center overflow-hidden"
        >   
            {(showRegister && !showLogin)?
                <div className="reservation-container min-w-[60vh] min-h-[70vh] bg-slate-100 flex flex-col items-center justify-center opacity-95 rounded-md border-black border-[4] z-10">
                    <h1 className="bg-transparent text-4xl pb-10">Register</h1>

                    <div className="flex flex-col items-center justify-center gap-4 w-full">

                    <input type="text" class="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Full Name"/>
                    <input type="email" class="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email"/>
                    <input type="text" class="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Phone Number"/>
                    <input type="password" class="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Password"/>

                    <button type="button" class="py-3 px-4 inline-flex items-center justify-center w-[80%] gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none" onClick={() => {
                        setShowRegister(false);
                        setShowLogin(false);
                    }}>
                        Register
                    </button>

                        <sub>Already have an account? <button className='underline' onClick={() => {
                       setShowRegister(!showRegister);
                       setShowLogin(!showLogin); 
                    }}>Login here</button></sub>

                    </div>

                </div>
            :
                <div className="reservation-container min-w-[60vh] min-h-[70vh] bg-slate-100 flex flex-col items-center justify-center opacity-95 rounded-md border-black border-[4] z-10">
                <h1 className="bg-transparent text-4xl pb-10">Login</h1>

                <div className="flex flex-col items-center justify-center gap-4 w-full">

                
                <input type="email" class="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email"/>
                
                <input type="password" class="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Password"/>

                

                <button type="button" class="py-3 px-4 inline-flex items-center justify-center w-[80%] gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none" onClick={() => {
                    setShowLogin(false);
                    setShowRegister(false);
                    }}>
                    Login
                </button>

                    <sub>Don't have an account? <button className='underline' onClick={() => {
                       setShowRegister(!showRegister);
                       setShowLogin(!showLogin); 
                    }}>Register here</button></sub>

                </div>

            </div>
            }
            <div className="w-full h-[100vh] fixed z-[5] bg-transparent" onClick={() => {
                setShowRegister(false);
                setShowLogin(false);
            }}>
           </div>
        </motion.div>
    )
}
