import React from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';



const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });

}



useEffect(() =>{

   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const {uid, email, displayName, photoURL} = user;
        // ...
          dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
          );

          navigate("/browse");

      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
      // Unsubscribe when component unmounts
    return () => unsubscribe();


  }, []);

    const handleGptSearchClick = () => {
      // Toggle GPT Search
      dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        // console.log(e.target.value);

        dispatch(changeLanguage(e.target.value));

    }



  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
       <img
        className='w-48 mx-auto md:mx-0'
       src={LOGO}
       alt="logo"/>

       { user && (
        <div className='flex p-2 justify-between'>

        {showGptSearch && (
          <select className='p-2 m-2 bg-gray-900 text-white rounded-lg'
        onChange={handleLanguageChange}
        
        >

         {SUPPORTED_LANGUAGES.map((lang) =>(
          <option key={lang.identifier} value={lang.identifier}>
          {lang.name}
          </option>
         ))}
        </select>
        )}


        <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
        onClick={handleGptSearchClick}
        >
         {showGptSearch ? "Home Page": "GPT Search"}
        </button>
        <img
        className=' hidden md:inline-block w-12 h-12'
        alt="usericon" 
        src= {USER_AVATAR}
        />

        <button
        onClick={handleSignOut}
        className='text-white font-bold '>(Sign Out)</button>
       </div>

       )}
    </div>

  )}

export default Header;
