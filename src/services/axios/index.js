import axiosBase from "axios";

// Default config options
const defaultOptions = {
  baseURL: 'https://api.evenbytes.hr/',
  headers: {
    'Content-Type': 'application/json',
  },
};

// Create instance
export const axios = axiosBase.create(defaultOptions);