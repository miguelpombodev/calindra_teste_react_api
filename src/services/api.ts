import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://store.omelete.com.br/'
});

export default api;
