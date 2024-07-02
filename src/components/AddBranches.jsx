import { motion } from "framer-motion"
import { useContext, useState } from "react"
import { ToggleComponent } from "../context/ToggleComponent"
import { FaXmark } from "react-icons/fa6"
import { db } from "../firebase_sdk"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"

export const AddBranches = () => {

  const {showAddBranches, setShowAddBranches, setLoading} = useContext(ToggleComponent);

  const [branchName, setBranchName] = useState('');
  const [location, setLocation] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [closingTime, setClosingTime] = useState('');

  const [openingTimeType, setOpeningTimeType] = useState('text');
  const [closingTimeType, setClosingTimeType] = useState('text');

  const getExistingBranch = async() =>{
    try {
      const getBranchDocs = await getDoc(doc(db, 'data', 'branches'));
      if(getBranchDocs.exists()){
        return getBranchDocs.data();
      }
      console.log('No branch');
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const saveNewBranch = async() => {
    setLoading(true);
    try {
      const existingBranch = await getExistingBranch();
      console.log(existingBranch);
      if(existingBranch){
        const newBranch = { branches:[
            ...existingBranch.branches,
            {
              branchName: branchName,
              location: location,
              open: openingTime,
              close: closingTime
            }
          ]
        };
        await updateDoc(doc(db, 'data', 'branches'), {branches: newBranch.branches});
      }
      else{
        await setDoc(doc(db, 'data', 'branches'), {
          branches : [{
            branchName: branchName,
            location: location,
            open: openingTime,
            close: closingTime
          }]
        })
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = () => {
    if(branchName === '' || location === '' || openingTime === '' || closingTime === ''){
      alert('Please fill in all the fields');
      return;
    }
    saveNewBranch();
    setShowAddBranches(!showAddBranches);
  }

  return (
    <>
      <motion.div
            initial={{scale:0.5}}
            animate={{scale:1}}
            exit={{opacity:0, scale:0.5, transition: {duration: 0.2}}}
            transition={{type: 'spring'}}
            className="fixed bg-transparent w-full h-screen flex flex-col items-center justify-center overflow-hidden z-10 poppins-regular"
      >
        <div className="w-[70%] h-[80%] z-10 bg-white rounded-md divide-y-2 border-black items-center p-5">
          <div className="flex flex-row justify-between bg-transparent items-center px-2">
            <h1 className="bg-transparent text-2xl">Add Branch</h1>
            <motion.button
              className="bg-transparent"
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.8}}
              onClick={() => {setShowAddBranches(!showAddBranches)}}
            >
              <FaXmark className="bg-transparent" size={24}/>
            </motion.button>
          </div>
          <div className="flex flex-col bg-transparent px-2 pt-4 gap-4 items-center">
            <input type="text" class="py-3 px-4 block w-[95%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Branch Name" value={branchName} onChange={(e) => {setBranchName(e.target.value)}}/>
            <input type="text" class="py-3 px-4 block w-[95%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Location" value={location} onChange={(e) => {setLocation(e.target.value)}}/>
            <input type={openingTimeType} class="py-3 px-4 block w-[95%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Opening Time" value={openingTime} onBlur={() => setOpeningTimeType('text')} onFocus={() => setOpeningTimeType('time')} onChange={(e) => {setOpeningTime(e.target.value)}}/>
            <input type={closingTimeType} class="py-3 px-4 block w-[95%] bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Closing Time" value={closingTime} onBlur={() => setClosingTimeType('text')} onFocus={() => setClosingTimeType('time')} onChange={(e) => {setClosingTime(e.target.value)}}/>
            <button type="button" class="py-3 px-4 inline-flex items-center justify-center w-[95%] gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none" onClick={() => {handleSubmit()}}>
              Submit
            </button>
          </div>
        </div>

        <div className="w-full h-[100vh] fixed z-[5] bg-transparent" onClick={() => setShowAddBranches(!showAddBranches)}>
        </div>
      </motion.div>
    </>
  )
}
