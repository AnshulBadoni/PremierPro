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
        "Bearer api_key",
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
