import axios from "axios";

const KEY = "AIzaSyDvQsvH6JjEOuSjtAvP2TdLt1DW4y4uBIU";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})