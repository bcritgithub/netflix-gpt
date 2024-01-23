// import React from 'react'
// import { useSelector } from 'react-redux';
// import VideoBackground from './VideoBackground';
// import VideoTitle from './VideoTitle';

// const MainContainer = () => {

//     const movies = useSelector(store => store.movies?.nowPlayingMovies);
//      // this is known as early return
//     if (!movies) return;

//     const mainMovie = movies[0];
//     console.log(mainMovie);

//     const {original_title, overview, id}= mainMovie;


//   return (
//     <div>
//     <VideoTitle title={original_title} overview={overview} />
//     <VideoBackground movieId={id}/>
//     </div>
//   )
// }

// export default MainContainer;

// import React from 'react'
// import { useSelector } from 'react-redux'
// import VideoTitle from './VideoTitle'
// import VideoBackground from './VideoBackground'

// const MainContainer = () => {

//     const movies =useSelector(store=>store.movies?.nowPlayingMovies);

//     if(movies === null) return;  //early return

//     // const mainMovie=movies[0];
//     // console.log(mainMovie);

//     const mainMovie = movies[0];

//     const {original_title,overview,id}=mainMovie;

//   return (
//     <div>
//         <VideoTitle title = {original_title} overview={overview}/>
//         <VideoBackground movieId={id}/>

//     </div>
//   )
// }

// export default MainContainer;


// import React from 'react';
// import { useSelector } from 'react-redux';
// import VideoTitle from './VideoTitle';
// import VideoBackground from './VideoBackground';

// const MainContainer = () => {
//   const movies = useSelector((store) => store.movies?.nowPlayingMovies);

//   if (!movies || movies.length === 0) {
//     // early return if movies is null or empty
//     return null; // or return some default content or loading indicator
//   }

//   const mainMovie = movies[0];
//   const { original_title, overview, id } = mainMovie;

//   return (
//     <div>
//       <VideoTitle title={original_title} overview={overview} />
//       <VideoBackground movieId={id} />
//     </div>
//   );
// };

// export default MainContainer;


import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
     // this is known as early return
    if (!movies) return;

    const mainMovie = movies[0];
    console.log(mainMovie);

    const {original_title, overview, id}= mainMovie;


  return (
    <div className='pt-[30%] bg-black md:pt-0'>
    <VideoTitle title={original_title} overview={overview} />
    <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;
