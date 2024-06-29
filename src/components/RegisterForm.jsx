import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { ToggleComponent } from '../context/ToggleComponent';
import { AuthContext } from '../context/AuthContext';
import { v4 as uuidv4 } from 'uuid';
import { auth, db } from '../firebase_sdk';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const RegisterForm = () => {
    const { showRegister, setShowRegister, showLogin, setShowLogin } = useContext(ToggleComponent);

    const { setUserData } = useContext(AuthContext);

    const [ fullName, setFullName ] = useState("");
    const [ email, setEmail ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const [ loginEmail, setLoginEmail ] = useState('');
    const [ loginPassword, setLoginPassword] = useState('');

    const saveUserData = async() => {
        try {
            await setDoc(doc(db, 'users', email), {
                userId: uuidv4(),
                name: fullName,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
                role: 'Customer',
            });
            
            setShowRegister(false);
            setShowLogin(true);
        } catch (error) {
            console.log(error);
        }
    }

    const getUserData = async() => {
        try {
            const getUserDocs = await getDoc(doc(db, 'users', loginEmail));
            if(getUserDocs.exists()){
                return getUserDocs.data();
            }
            console.log('Data does not exist');
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    const handleRegister = async() => {
        if(fullName === '' || email === '' || phoneNumber === '' || password === '' || confirmPassword === ''){
            alert('Please fill in all of the fields');
            return;
        }
        if(password !== confirmPassword){
            alert('Password did not match');
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await saveUserData();
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogin = async() => {
        if(loginEmail === '' || loginPassword === ''){
            alert('Please fill in all of the fields');
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            const tempData = getUserData();
            setUserData(tempData);
            setShowRegister(false);
            setShowLogin(false);
        } catch (error) {
            alert('Unknown Error Occured');
            console.log(error);
        }
    } 

    return (
        <motion.div
            initial={{scale:0.5}}
            animate={{scale:1}}
            exit={{opacity:0, scale:0.5}}
            transition={{type: 'spring'}}
            className="fixed bg-transparent w-full h-[100vh] z-10 flex flex-col items-center justify-center overflow-hidden poppins-regular"
        >   
            {(showRegister && !showLogin)?
                <div className="reservation-container min-w-[60vh] min-h-[70vh] bg-slate-100 flex flex-col items-center justify-center opacity-95 rounded-md border-black border-[4] z-10">
                    <h1 className="bg-transparent text-4xl pb-10">Register</h1>

                    <div className="flex flex-col items-center justify-center gap-4 w-full">

                    <input type="text" className="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                    <input type="email" className="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" className="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <input type="password" className="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" className="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

                    <button type="button" className="py-3 px-4 inline-flex items-center justify-center w-[80%] gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none" onClick={() => handleRegister()}>
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

                
                <input type="email" className="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
                
                <input type="password" className="py-3 px-4 block w-[80%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>

                

                <button type="button" className="py-3 px-4 inline-flex items-center justify-center w-[80%] gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none" onClick={() => handleLogin()}>
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
