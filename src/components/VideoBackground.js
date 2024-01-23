// import {  useSelector } from 'react-redux';
// import useMovieTrailer from '../hooks/useMovieTrailer';


// const VideoBackground = ({movieId}) => {

//     const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

//     useMovieTrailer(movieId);

//   return (
//     <div className='w-screen'>
//     <iframe
//     className='w-screen aspect-video'
//     src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}  //? agar null hoga ye nhi lagayenge to error dega
//      title="YouTube video player"
//      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
//      </iframe>
//     </div>
//   )
// }

// export default VideoBackground;

import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    useMovieTrailer(movieId);

  return (
    <div className='w-screen'>
    <iframe
    className='w-screen aspect-video'
    src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}  //? agar null hoga ye nhi lagayenge to error dega
     title="YouTube video player"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
     </iframe>
    </div>
  )
}

export default VideoBackground;
