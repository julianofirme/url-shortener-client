import axios from "axios";

interface IParams {
  originalUrl: string;
}

const API_URL = process.env.NODE_ENV === "production" ? 'https://url-7uj6.onrender.com/url' : 'http://localhost:3030/url';

const postData = async ({ originalUrl }: IParams) => {
  const response = await axios.post(
    API_URL,
    {
      original_url: originalUrl
    }
  );

  return response.data
};

export { postData };