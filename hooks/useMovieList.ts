// import useSwr from 'swr'
// import fetcher from '@/libs/fetcher';

// const useMovies = () => {
//   const { data, error, isLoading } = useSwr('/api/movies', fetcher, {
//     revalidateIfStale: false,
//     revalidateOnFocus: false,
//     revalidateOnReconnect: false,
//   });
//   return {
//     data,
//     error,
//     isLoading
//   }
// };

// export default useMovies;
import useSwr from 'swr';
import fetcher from '@/libs/fetcher';

const useMovieList = () => {
  const { data = [], error, isLoading } = useSwr('/api/movies', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data, // Return movies (default to an empty array)
    error,
    isLoading,
    hasError: !!error, // Helper boolean for error checking
  };
};

export default useMovieList;
