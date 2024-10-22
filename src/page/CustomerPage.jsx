import { useState, useRef, useContext } from 'react';
import { Navbar } from '../components/Navbar'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Link, Element } from 'react-scroll';
import { FaStar } from 'react-icons/fa6';
import { RegisterForm } from '../components/RegisterForm';
import { ReservationForm } from '../components/ReservationForm';
import { ToggleComponent } from '../context/ToggleComponent';
import { AuthContext } from '../context/AuthContext';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase_sdk';
import { PropagateLoader } from 'react-spinners';

import model_photo from '../../public/model.png';
import logo_white from '../../public/sea_salon_logo_white.svg';
import haircut_img from '../../public/styling.jpeg';
import maincure_img from '../../public/manicure_n_pedicure.jpeg';
import facial_img from '../../public/facial_treatment.jpeg';

const enterBottom = {
    before: {
        y: 150,
        opacity: 0,
    },
    after: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
  };
  
  const enterLeft = {
    before: {
      x: -100,
      opacity: 0,
    },
    after: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      }
    },
  };
  
  const enterRight = {
    before: {
      x: 100,
      opacity: 0,
    },
    after: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      }
    },
  };

export const CustomerPage = () => {

    const { showReservation, setShowReservation, setShowRegister, showRegister, showLogin, loading, setLoading } = useContext(ToggleComponent);
    const { currentUser, userData, branchData, setBranchData } = useContext(AuthContext);
  
    const [highlight, setHighlight] = useState(0);
    const [starReview, setStarReview] = useState(0);
    const [comment, setComment] = useState('');
  
    const servicesRef = useRef();
    const serviceIsInView = useInView(servicesRef, {margin:'-100px'});
  
    const reviewRef = useRef();
    const reviewIsInView = useInView(reviewRef, {margin:'0px'});

    const getBranchData = async() =>{
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
  
    const handleSubmit = () => {
      if(starReview < 1 && comment === ''){
        alert('Please add a rating and comments');
        return;
      }
      if(starReview < 1){
        alert('Please add a rating');
        return;
      }
      if(comment === ''){
        alert('Please give us some feedback');
        return;
      }
      saveReviews();
      setStarReview(0);
      setHighlight(0);
      setComment('');
    }

    const getPrevReviews = async() =>{
      try {
        const getReviewDocs = await getDoc(doc(db, 'user_input', 'reviews'));
        if(getReviewDocs.exists()){
          return getReviewDocs.data();
        }
        console.log('No Reviews Yet');
        return null;
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    const saveReviews = async() => {
      setLoading(true);
      try {
          const prevReviews = await getPrevReviews();
          console.log(prevReviews);
          if(prevReviews){
            const newReview = { reviews:[
                ...prevReviews.reviews,
                {
                  name: userData.name,
                  rating: starReview,
                  comment: comment,
                }
              ]
            };
            await updateDoc(doc(db, 'user_input', 'reviews'), {reviews: newReview.reviews});
          }
          else{
            await setDoc(doc(db, 'user_input', 'reviews'), {
              reviews : [{
                name: userData.name,
                rating: starReview,
                comment: comment
              }]
            })
          }
      } catch (error) {
          console.log(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
  }

  return (
    <>
      <Navbar/>
      <AnimatePresence>{ 
        loading ?
        <motion.div
          className='fixed z-20 flex items-center justify-center bg-black bg-opacity-25 w-full min-h-screen'
          animate={{
            transition:{
              duration: 0.5,
              type: 'spring'
            }
          }}
        >
          <PropagateLoader loading={loading} color='black'/>
        </motion.div>
        :
        null
      }</AnimatePresence>
      <AnimatePresence>{showReservation? <ReservationForm/> : null}</AnimatePresence>
      <AnimatePresence>{showRegister || showLogin? <RegisterForm/> : null}</AnimatePresence>
      
      <Element name='homepage'>
        <section className='home-page items-center justify-center flex w-full selection:bg-black selection:text-neutral-100'>
          <div className="absolute flex items-center justify-center gap-16 w-full">
            <motion.div
              variants={enterLeft}
              initial='before'
              animate='after'
              className='left-text flex flex-col justify-center items-center unna-regular'
            >
              <h1 className='text-6xl'>SEA Salon</h1>
            </motion.div>
            <motion.div
              variants={enterBottom}
              initial='before'
              animate='after'
              className='image flex flex-col justify-center items-center'
            >
              <img src={model_photo} alt="model" className='model' draggable='false'/>
            </motion.div>
            <motion.div
              variants={enterRight}
              initial='before'
              animate='after'
              className='right-text flex flex-col justify-center items-center unna-regular'
            >
              <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl'>Beauty and Elegance</h2>
                <h1 className='text-6xl pb-6'>Redefined</h1>
                <motion.button
                  whileTap={{scale: 0.9}}
                  onClick={() => {
                    {(!currentUser) ? setShowRegister(true) : setShowReservation(!showReservation);}
                  }}
                  className='btn text-black p-2 text-2xl rounded-lg'
                >
                  Reservation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </Element>

      <section className='divider'></section>

      <Element name='services'>

        <section className='services items-center justify-center flex flex-col w-full'>
          <motion.h1
            variants={enterBottom}
            ref={servicesRef}
            initial='before'
            animate={serviceIsInView && 'after'}
            className='services-text text-5xl pb-5 selection:bg-black selection:text-neutral-100'
          >
            S E R V I C E S
          </motion.h1>
          <div className='container items-center justify-center flex w-full gap-16'>
            <motion.div
              variants={enterBottom}
              ref={servicesRef}
              initial='before'
              animate={serviceIsInView && 'after'}
              className="max-w-xs bg-white border border-gray-200 rounded-lg shadow"
            >
          
              <img className="img1 rounded-t-lg" src={haircut_img} alt="styling" draggable='false' />
          
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Haircut and Styling</h5>
                  <p className="mb-3 font-normal text-gray-700">A Modern and stylish haircut, expert styling, and vibrant coloring to enhance your look.</p>
              </div>
            </motion.div>
            <motion.div
              variants={enterBottom}
              ref={servicesRef}
              initial='before'
              animate={serviceIsInView && 'after'}
              className="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
          
              <img className="img2 rounded-t-lg" src={maincure_img} alt="manicure and pedicure" draggable='false'/>
          
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Manicure and Pedicure</h5>
                  <p className="mb-3 font-normal text-gray-700">Expert nail shaping, cuticle care, and polish for perfectly groomed hands and feet.</p>
              </div>
            </motion.div>
            <motion.div
              variants={enterBottom}
              ref={servicesRef}
              initial='before'
              animate={serviceIsInView && 'after'}
              className="max-w-xs bg-white border border-gray-200 rounded-lg shadow"
            >
          
              <img className="img3 rounded-t-lg" src={facial_img} alt="facial-treatment" draggable='false'/>
          
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Facial Treatments</h5>
                  <p className="mb-3 font-normal text-gray-700">Rejuvenating facials that cleanse, exfoliate, and hydrate for a radiant glow.</p>
              </div>
            </motion.div>

          </div>
        </section>
      </Element>

      <Element name='review'>
        <section className='review flex flex-col items-center justify-start pt-24'>
          <motion.h1
            variants={enterBottom}
            ref={reviewRef}
            initial='before'
            animate={reviewIsInView && 'after'}
            className='review-text bg-transparent text-5xl pb-20'
          >
            R E V I E W S
          </motion.h1>
          <div className='w-full bg-transparent flex flex-row justify-center items-center gap-32'>
            <div className='bg-transparent review-container flex flex-col justify-center items-center'>
              <motion.h2
                variants={enterBottom}
                ref={reviewRef}
                initial='before'
                animate={reviewIsInView && 'after'}
                className='review-text bg-transparent text-3xl pb-10'
              >
                Your feedback means a lot to us
              </motion.h2>
              <motion.div
                ref={reviewRef}
                variants={enterBottom}
                initial='before'
                animate={reviewIsInView && 'after'}
                className='bg-transparent flex flex-row justify-center gap-8 pb-8'
              >
                <button className='bg-transparent' onClick={() => setStarReview(1)} onMouseEnter={() => setHighlight(1)} onMouseLeave={() => setHighlight(0) && setStarReview(0)}> <FaStar color={`${highlight > 0 || starReview > 0 ? 'black' : 'gray'}`} size={64}/> </button>
                <button className='bg-transparent' onClick={() => setStarReview(2)} onMouseEnter={() => setHighlight(2)} onMouseLeave={() => setHighlight(0) && setStarReview(0)}> <FaStar color={`${highlight > 1 || starReview > 1 ? 'black' : 'gray'}`} size={64}/> </button>
                <button className='bg-transparent' onClick={() => setStarReview(3)} onMouseEnter={() => setHighlight(3)} onMouseLeave={() => setHighlight(0) && setStarReview(0)}> <FaStar color={`${highlight > 2 || starReview > 2 ? 'black' : 'gray'}`} size={64}/> </button>
                <button className='bg-transparent' onClick={() => setStarReview(4)} onMouseEnter={() => setHighlight(4)} onMouseLeave={() => setHighlight(0) && setStarReview(0)}> <FaStar color={`${highlight > 3 || starReview > 3 ? 'black' : 'gray'}`} size={64}/> </button>
                <button className='bg-transparent' onClick={() => setStarReview(5)} onMouseEnter={() => setHighlight(5)} onMouseLeave={() => setHighlight(0) && setStarReview(0)}> <FaStar color={`${highlight > 4 || starReview > 4 ? 'black' : 'gray'}`} size={64}/> </button>
              </motion.div>  
            </div>

            <div className='bg-transparent flex flex-col justify-center items-end gap-y-2'>
              <motion.textarea
                value={comment}
                onChange={(e) => {setComment(e.target.value)}}
                placeholder='Comments'
                variants={enterBottom}
                ref={reviewRef}
                initial="before"
                animate={reviewIsInView && "after"}
                className='rounded-md min-w-[60vh] min-h-[20vh] max-h-[32vh] p-3 border-[2px]' />
              <motion.button
                variants={enterBottom}
                ref={reviewRef}
                initial="before"
                animate={reviewIsInView && "after"}
                whileTap={{scale: 0.9}}
                className='review-text btn text-black p-2 text-md rounded-lg'
                onClick={() => {
                  (!currentUser)? setShowRegister(true) : handleSubmit();
                }}
              >
                Submit
              </motion.button>
            </div>
          </div>
        </section>
        <section className='bg-black h-[24vh] w-full flex flex-row justify-between self-center'>
          <div className='bg-transparent flex flex-col justify-center self-center gap-3 w-full px-20'>
            <div className='flex flex-row justify-between items-center bg-transparent w-full gap-12 space-x-10'>
              <div className=" bottom-logo flex justify-center items-center bg-transparent">
                <motion.button
                    whileHover={{scale: 1}}
                    whileTap={{scale: 0.9}}
                    transition={{type:"spring", stiffness: 400, damping: 17}}
                    className='bg-transparent'
                >
                    <Link to='homepage' smooth={true} duration={500} className='flex flex-row items-center bg-transparent text-3xl text-neutral-100'>
                        <img src={logo_white} alt="sea-salon-logo" className='logo bg-transparent' draggable='false'/>
                        SEA Salon
                    </Link>
                </motion.button>
              </div>

              <div className='bg-transparent flex flex-col justify-between self-center gap-2'>
                <h3 className='bg-transparent text-2xl text-neutral-100 text-center'>Working Hours</h3>
                <p className='bg-transparent text-neutral-100 text-center'>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p className='bg-transparent text-neutral-100 text-center'>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                <p className='bg-transparent text-gray-300'>&copy; 2024 SEA Salon. All rights reserved.</p>
              </div>

              <div className='bg-transparent flex flex-col justify-between self-center gap-2'>
                <h3 className='bg-transparent text-2xl text-neutral-100 text-center'>Contacts</h3>
                <p className='bg-transparent text-neutral-100 text-center'>Thomas - 08123456789</p>
                <p className='bg-transparent text-neutral-100  text-center'>Sekar - 08164829372</p>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  )
}
