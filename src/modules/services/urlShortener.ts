import axios from "axios";

interface IParams {
  originalUrl: string;
}

const postData = async ({ originalUrl }: IParams) => {
  const response = await axios.post(
    "https://df.up.railway.app",
    {
      original_url: originalUrl
    }
  );

  return response.data
};

export { postData };