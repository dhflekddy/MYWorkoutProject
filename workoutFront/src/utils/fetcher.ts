
import axios from 'axios';

const fetcher1 = (url:string) => axios.get(url, { withCredentials: true }).then((response) => response.data);

export default fetcher1;