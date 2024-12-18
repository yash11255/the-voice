// import React from 'react';
// import { NextPageContext } from 'next';
// import { getSession } from 'next-auth/react';

// import Navbar from '@/components/Navbar';
// import Billboard from '@/components/Billboard';
// import MovieList from '@/components/MovieList';
// import InfoModal from '@/components/InfoModal';
// import useMovieList from '@/hooks/useMovieList';
// import useFavorites from '@/hooks/useFavorites';
// import useInfoModalStore from '@/hooks/useInfoModalStore';

// export async function getServerSideProps(context: NextPageContext) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth',
//         permanent: false,
//       }
//     }
//   }

//   return {
//     props: {}
//   }
// }

// const Home = () => {
//   const { data: movies = [] } = useMovieList();
//   const { data: favorites = [] } = useFavorites();
//   const {isOpen, closeModal} = useInfoModalStore();

//   return (
//     <>
//       <InfoModal visible={isOpen} onClose={closeModal} />
//       <Navbar />
//       <Billboard />
//       <div className="pb-40">
//         <MovieList title="Trending Now" data={movies} />
//         <MovieList title="My List" data={favorites} />
//       </div>
//     </>
//   )
// }

// export default Home;

import React from 'react';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import useInfoModalStore from '@/hooks/useInfoModalStore';

const Home = () => {
  // Fetch movie data and favorites using custom hooks
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();

  return (
    <>
      {/* InfoModal to display additional movie details */}
      <InfoModal visible={isOpen} onClose={closeModal} />
      
      {/* Navigation bar */}
      <Navbar />
      
      {/* Featured billboard section */}
      <Billboard />
      
      {/* Movie lists */}
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        {favorites.length > 0 && (
          <MovieList title="My List" data={favorites} />
        )}
      </div>
    </>
  );
};

export default Home;

