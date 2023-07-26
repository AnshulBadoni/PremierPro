import axios from "axios";

export const fetchData = async (category) => {
  const endpoint =
    category === "Shows" ? "trending/tv/day" : "trending/movie/day";

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${endpoint}`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTg3YmFlZGZjMjNmOTAxZjk1NTFmMTFlOWFiMmRiNSIsInN1YiI6IjYzMGVmYjlhZDdkY2QyMDA3ZTMyNDFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BuhYUUlkDDCU9I4zIq-MeUEKCKPx9jG3wrdM9oRpw20",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response);
    return response.data.results; // Assuming the API returns an array of results
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
};
