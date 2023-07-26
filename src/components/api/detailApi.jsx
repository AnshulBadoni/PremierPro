// api/detailApi.jsx

import axios from "axios";

export const fetchDetails = async (id) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTg3YmFlZGZjMjNmOTAxZjk1NTFmMTFlOWFiMmRiNSIsInN1YiI6IjYzMGVmYjlhZDdkY2QyMDA3ZTMyNDFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BuhYUUlkDDCU9I4zIq-MeUEKCKPx9jG3wrdM9oRpw20'
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTg3YmFlZGZjMjNmOTAxZjk1NTFmMTFlOWFiMmRiNSIsInN1YiI6IjYzMGVmYjlhZDdkY2QyMDA3ZTMyNDFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BuhYUUlkDDCU9I4zIq-MeUEKCKPx9jG3wrdM9oRpw20'
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