import axios from "axios";

interface IParams {
  originalUrl: string;
}

const postData = async ({ originalUrl }: IParams) => {
  const response = await axios.post(
    "https://url-7uj6.onrender.com/url",
    {
      original_url: originalUrl
    }
  );

  return response.data
};

export { postData };