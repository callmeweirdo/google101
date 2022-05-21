import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";
import Loading from "./Loading";
import ReactPlayer from "react-player";

const Results = () => {
  const { getResult, results, isLoading, searchTerm, setSearchTerm } =
    useResultContext();

  const location = useLocation();

  useEffect(() => {
    getResult(`/search/q=${"og weirdo"}`);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 ">
          {results?.results?.map(({ link, title }, index) => {
            return (
              <div key={index} className="w-2/5 w-full ">
                <a href={link}>
                  <p className="text-sm">
                    {link.lenght > 30 ? link.substring(0, 30) : link}
                  </p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 ">
                    {title}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      );
    default:
      return "error..";
  }

  return <div>kjhgfd</div>;
};

export default Results;
