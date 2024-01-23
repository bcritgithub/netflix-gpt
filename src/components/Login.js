import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidaData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const[errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();


    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick=() => {
        // validate the form data

        // console.log(email.current.value);
        // console.log(password.current.value);


        const message = checkValidaData(email.current.value, password.current.value);
         setErrorMessage(message);
         if(message) return;

         //Sign in sign up logic

         if(!isSignInForm) {
            // Sign Up logic

            createUserWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
              )
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;

                updateProfile(user, {
                  displayName: name.current.value,
                  photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4"
                }).then(() => {
                  // Profile updated!
                  // ...

                  navigate("/browse");

                }).catch((error) => {
                  // An error occurred
                  // ...
                  setErrorMessage(error.message);
                });




                console.log(user);
                navigate("/browse");

                  // ...
              })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });


         }

         else{
          // sign in logic

          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
           console.log(user);
           navigate("/browse");
      
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
           });


         }


    };

  return (
    <div>
         <Header/>
         <div className='absolute'>
         <img className='h-screen object-cover'
         src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
         alt="logo"/>
      </div>


      <form
      onSubmit={(e) => e.preventDefault()}
      className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>
      {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>


      {!isSignInForm &&(
        <input type='text'
        placeholder='Full Name'
         className='p-4 my-4 w-full bg-gray-700'/>
         )}


        <input
         ref={email}
        type='text'
        placeholder='Email Address'
        className='p-4 my-4 w-full bg-gray-700'/>

       

        <input
         ref={password}
        type='password'
        placeholder='Password'
         className='p-4 my-4 w-full bg-gray-700'/>
        

         <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button
        className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer' onClick={handleButtonClick}>
         {isSignInForm ? "Sign In" : "Sign Up"}
        </button>


        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "New to NetFlix? Sign up Now" : "Already registered? Sign in Now"}
        
        </p>
      </form>
    </div>
  )
}

export default Login;
