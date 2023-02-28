import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://ec2-52-91-202-12.compute-1.amazonaws.com/api',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});
