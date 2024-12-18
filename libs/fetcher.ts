// import axios from 'axios';

// const fetcher = (url: string) => axios.get(url).then(res => res.data);

// export default fetcher;
// const fetcher = (url) => fetch(url).then((res) => res.json());  // No authentication required

// export default fetcher;

const fetcher = (url: string) => fetch(url).then((res) => res.json());  // Specify type for url

export default fetcher;

