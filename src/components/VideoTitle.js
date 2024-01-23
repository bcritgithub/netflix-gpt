// import React from 'react'

// const VideoTitle = ({title, overview}) => {
//   return (
//     <div className=' w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black'>
//         <h1 className='text-6xl font-bold'>{title}</h1>
//         <p className='py-6 text-lg w-1/4'>{overview}</p>

//         <div>
//          <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>
//           ▶️ Play
//          </button>
//          <button className='bg-gray-400 text-white p-4 px-12 text-xl bg-opacity-30 rounded-lg mx-2'>
//          ℹMore Info
//          </button>
//         </div>
//     </div>
//   )
// }

// export default VideoTitle;

import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>

        <div className='m-4 md:m-0'>
         <button className='bg-white text-black py-2 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80'>
          ▶️ Play
         </button>
         <button className='hidden md:inline-block bg-gray-400 text-white p-4 px-12 text-xl bg-opacity-30 rounded-lg mx-2'>
         ℹMore Info
         </button>
        </div>
    </div>
  )
}

export default VideoTitle;
