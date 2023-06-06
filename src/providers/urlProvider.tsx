import { useState, createContext } from "react";
import { postData } from "../modules/services/urlShortener";

interface dataContext {
  handleShortenUrl: (originalUrl: string) => void;
  url: string;
}

const defaultValues: dataContext = {
  handleShortenUrl: function (originalUrl: string): void {},
  url: "",
};

export const UrlContext = createContext(defaultValues);

const UrlProvider = (props: any) => {
  const [url, setUrl] = useState<string>("");

  const handleShortenUrl = async (originalUrl: string) => {
    try {
      const response = await postData({ originalUrl: originalUrl });
      setUrl(response.url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UrlContext.Provider
      value={{
        handleShortenUrl,
        url,
      }}
    >
      {props.children}
    </UrlContext.Provider>
  );
};

export default UrlProvider;
