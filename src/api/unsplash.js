import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
    Authorization: 'Client-ID 3JZzbVZ0TMnf-A7y5fnv3dDHMR709Z4QSe5zDW4Hmms'
}});