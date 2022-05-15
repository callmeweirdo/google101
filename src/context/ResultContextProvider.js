import { createContext, useContext, useState } from "react";

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResult = async (type) => {
    setIsloading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        // "X-Proxy-Location": "EU",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "852f6ad7b9msh4e42c5565ca4d3cp16b149jsnee5337799199",
      },
    });

    const data = await response.json();
    setResult(data);
    setIsloading(false);
    console.log(data);
  };

  return (
    <ResultContext.Provider
      value={{ result, isLoading, searchTerm, setSearchTerm }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);