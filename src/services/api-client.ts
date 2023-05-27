import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '21fa766486ca42fba594e66ae01c23f4'
    }
})