// import useSwr from 'swr'
// import fetcher from '@/libs/fetcher';

// const useMovie = (id?: string) => {
//   const { data, error, isLoading } = useSwr(id ? `/api/movies/${id}` : null, fetcher, {
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

// export default useMovie;
import useSwr from 'swr';
import fetcher from '@/libs/fetcher';

const useMovie = (id?: string) => {
  const { data = {}, error, isLoading } = useSwr(
    id ? `/api/movies/${id}` : null, // Fetch only if id is provided
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,         // Movie data (defaults to an empty object)
    error,        // Error object (if any)
    isLoading,    // Loading state
    hasError: !!error, // Helper boolean to check for errors
  };
};

export default useMovie;
