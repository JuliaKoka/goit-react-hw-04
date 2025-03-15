import axios from "axios";

export const fetchInfo = async (topic, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: topic,
      client_id: import.meta.env.VITE_API_KEY,
      per_page: 12,
      page: page,
    },
  });

  return response.data.results;
};
