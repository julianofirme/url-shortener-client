import { useState, createContext, useEffect, SetStateAction } from "react";
import { postData } from "../modules/services/urlShortener";

interface dataContext {
  setOriginalUrl: (_: SetStateAction<string>) => void;
  url: string;
}

const defaultValues: dataContext = {
  setOriginalUrl: function (_: SetStateAction<string>): void {},
  url: "",
};

export const UrlContext = createContext(defaultValues);

const UrlProvider = (props: any) => {
  const [url, setUrl] = useState<string>("");
  const [originalUrl, setOriginalUrl] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await postData({ originalUrl: originalUrl });
        setUrl(data);
        console.log("🚀 ~ response.data.url", data)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [originalUrl]);

  return (
    <UrlContext.Provider
      value={{
        setOriginalUrl,
        url,
      }}
    >
      {props.children}
    </UrlContext.Provider>
  );
};

export default UrlProvider;