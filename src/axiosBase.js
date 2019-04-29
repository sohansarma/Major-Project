import axios from 'axios';

export const localStorageGetter = name => localStorage.getItem(name);


const instance = axios.create({});

export default instance;