import axios from 'axios';

export const localStorageGetter = name => localStorage.getItem(name);


const instance = axios.create({
  headers: {
    'Authorization': `Bearer ${localStorageGetter('token')}`,
  },
});

export default instance;