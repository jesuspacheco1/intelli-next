import axios from 'axios';

export const API = axios.create({
    baseURL: process.env.NODE_ENV === 'development' 
            ? `${process.env.REACT_APP_API_URL_DEVELOPMENT}/${process.env.REACT_APP_API_VERSION_DEVELOPMENT}` 
            : `${process.env.REACT_APP_API_URL_PRODUCTION}/${process.env.REACT_APP_API_VERSION_PRODUCTION}`,
    responseType: "json"
});

export const APISUPERHERO = axios.create({
    baseURL: process.env.NODE_ENV === 'development' 
            ? `${process.env.REACT_APP_API_SUPERHERO_URL_DEVELOPMENT}/${process.env.REACT_APP_API_SUPERHERO_VERSION_DEVELOPMENT}` 
            : `${process.env.REACT_APP_API_SUPERHERO_URL_PRODUCTION}/${process.env.REACT_APP_API_SUPERHERO_VERSION_PRODUCTION}`,
    responseType: "json"
});

