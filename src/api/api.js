// src/services/api.js
import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: 'https://admindashbordforenln.redshiftbusinessgroup.com/api',
  headers: {
    'Authorization': token ? `Bearer ${token}` : '',
  },
});

export default api;
