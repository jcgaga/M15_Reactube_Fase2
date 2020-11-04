import axios from 'axios';

const KEY = 'AIzaSyB946KNvz7pySghsMcyz2KaVK4du9mxEQQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
})