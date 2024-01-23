// import React from 'react'
// import Header from './Header';
// import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
// import MainContainer from './MainContainer';
// import SecondaryContainer from './SecondaryContainer';
// import usePopularMovies from '../hooks/usePopularMovies';
// import useTrendingMovies from '../hooks/useTrendingMovies';
// import useUpComingMovies from '../hooks/useUpComingMovies';
// import GptSearch from './GptSearch';
// import { useSelector } from 'react-redux';


// const Browse = () => {

//   const showGptSearch = useSelector(store => store.gpt.showGptSearch);

//   useNowPlayingMovies();
//   usePopularMovies();
//   useTrendingMovies();
//   useUpComingMovies();


//   return (
//     <div>
//      <Header/>
//      {
//        showGptSearch ?  <GptSearch/> :

//        <>
//        <MainContainer/>
//      <SecondaryContainer/>
//      </>
//      }

//     </div>
//   )
// }

// export default Browse;


// import { useSelector } from 'react-redux';
// import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
// import usePopularMovies from '../hooks/usePopularMovies';
// import GptSearch from './GptSearch';
// import Header from './Header'
// import MainContainer from './MainContainer';
// import SecondaryContainer from './SecondaryContainer';


// const Browse = () => {

//   const showGptSearch=useSelector(store=>store.gpt.showGptSearch);



//   //fetch data from tmdb api and update sore

   
//   useNowPlayingMovies();  //it is a hook which we have created 
//   usePopularMovies();
//   return (
//     <div>
//       <Header/>
//       {
//         showGptSearch?
//         <GptSearch/>:
//         <> 
//         <MainContainer/>
//         <SecondaryContainer/>
//         </>

//       }


//       {/* react fragemnt */}
      
      
      
      

//          {/*

//               main container
//                 -video background
//                 -video title'
//               secondary container
//                 -movielist*n
//                  -cards*n


//           */}


//     </div>
//   )
// }

// export default Browse


// import { useSelector } from 'react-redux';
// import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
// import usePopularMovies from '../hooks/usePopularMovies';
// import GptSearch from './GptSearch';
// import Header from './Header'
// import MainContainer from './MainContainer';
// import SecondaryContainer from './SecondaryContainer';


// const Browse = () => {
//   const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

//   // fetch data from tmdb api and update store
//   useNowPlayingMovies();
//   usePopularMovies();

//   console.log('showGptSearch:', showGptSearch);

//   return (
//     <div>
//       <Header />
//       {showGptSearch ? (
//         <GptSearch />
//       ) : (
//         <>
//           <MainContainer />
//           <SecondaryContainer />
//         </>
//       )}
//     </div>
//   );
// };

// export default Browse;


import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpComingMovies();
  

  return (
    <div>
     <Header/>
     {
       showGptSearch ?  <GptSearch/> : 

       <>
       <MainContainer/>
     <SecondaryContainer/>
     </>
     }
    
     
    </div>
  )
}

export default Browse;