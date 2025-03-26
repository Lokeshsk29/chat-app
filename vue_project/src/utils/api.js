// src/utils/api.js

export async function get_django_data({ path, args = {}, method = 'GET' }) {
    // Define base URL depending on the environment
    const baseURL =
      window.location.hostname === 'localhost'
        ? 'http://localhost:8000'
        : 'https://your-production-url.com';
  
    const url = `${baseURL}${path}`;
  
    const headers = {
      'Content-Type': 'application/json',
    };
  
    try {
      const options = {
        method,
        headers,
        ...(method !== 'GET' && { body: JSON.stringify(args) }),
      };
      console.log("Using",url,options);
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Call Failed:', error);
      throw error;
    }
  }
  