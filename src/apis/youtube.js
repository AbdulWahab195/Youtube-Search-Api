import axios from 'axios';

const KEY = 'AIzaSyDllW50FcyYoyBULS4T16vzEo4yQKYrME4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    } 
});