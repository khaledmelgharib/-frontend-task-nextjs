import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://tinytales.trendline.marketing/api', 
} );

apiClient.interceptors.request.use(
  (config) => {
    if (config.url.includes('/register') || config.url.includes('/login')) {
      return config;
    }

    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
