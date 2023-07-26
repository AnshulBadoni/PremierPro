// api/detailApi.jsx

import axios from "axios";

export const fetchDetails = async (id) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer api_key'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data; // Return the response data
  } catch (error) {
    console.error(error);
    return null; // Return null in case of an error
  }
  
};
// api/detailApi.jsx


export const fetchtvDetails = async (id) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${id}`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer api_key'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    console.log(response.data.original_name);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
