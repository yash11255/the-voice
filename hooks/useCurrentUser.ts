// import useSwr from 'swr'

// import fetcher from '@/libs/fetcher';

// const useCurrentUser = () => {
//   const { data, error, isLoading, mutate } = useSwr('/api/current', fetcher);
//   return {
//     data,
//     error,
//     isLoading,
//     mutate,
//   }
// };

// export default useCurrentUser;
import useSWR from 'swr';
import fetcher from '@/libs/fetcher';  // Assuming fetcher is still used

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
