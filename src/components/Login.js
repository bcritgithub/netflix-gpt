import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
         <Header/>
         <div className='absolute'>
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
         alt="logo"/>
      </div>

      <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>
      {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>


      {!isSignInForm &&(
        <input type='text' 
        placeholder='Full Name'
         className='p-4 my-4 w-full bg-gray-700'/>
         )}


        <input type='text' 
        placeholder='Email Address' 
        className='p-4 my-4 w-full bg-gray-700'/>

       

        <input type='password' 
        placeholder='Password'
         className='p-4 my-4 w-full bg-gray-700'/>
        

        <button 
        className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer'> {isSignInForm ? "Sign In" : "Sign Up"} 
        </button>

        
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "New to NetFlix? Sign up Now" : "Already registered? Sign in Now"}
        
        </p>
      </form>
    </div>
  )
}

export default Login;
