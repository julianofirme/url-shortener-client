import axios from "axios";

interface IParams {
  originalUrl: string;
}

const postData = async ({ originalUrl }: IParams) => {
  const response = await axios.post(
    "https://cx6.herokuapp.com/urls",
    {
      original_url: originalUrl
    }
  );

  return response.data
};

export { postData };