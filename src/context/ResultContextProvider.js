import { createContext, useContext, useState } from "react";

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResult = async (type) => {
    setIsloading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      },
    });

    const data = await response.json();

    if (type.includes("/image")) {
      setResults(data.image_results);
    } else if (type.includes("/news")) {
      setResults(data.entries);
    } else {
      setResults(data.results);
    }

    setIsloading(false);
    // console.log(data);
  };

  return (
    <ResultContext.Provider
      value={{ getResult, results, isLoading, searchTerm, setSearchTerm }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
