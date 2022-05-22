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
    getResult(`${location.pathname}/q=${searchTerm}`);
  }, [searchTerm, location.pathname]);

  if (isLoading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 ">
          {results?.map(({ link, title }, index) => {
            return (
              <div key={index} className="md:w-2/5 w-full mt-3 ">
                <a href={link} target="_blank">
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
    case "/image":
      return (
        <div className="flex flex-wrap justify-center items-center mt-5 ">
          {results?.map(({ image, link: { title, href }, index }) => (
            <a
              href={href}
              key={index}
              target="_blank"
              rel="noreferrer"
              className="p-5 sm:p-3"
            >
              <img src={image.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2 ">{title}</p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-center items-center mt-5 ">
          {results?.map((links, id, source, title) => {
            return (
              <a
                href={links}
                key={id}
                target="_blank"
                rel="noreferrer"
                className="p-5 sm:p-3 hover:underline "
              >
                <p className="text-lg dark:text-blue-300 text-blue-700 ">
                  {title}
                </p>
                <div className="flex gap-4">
                  <a href={source?.href} target="_blank" rel="noreferrer">
                    {source?.href}
                  </a>
                </div>
              </a>
            );
          })}
        </div>
      );
    case "/video":
      return (
        <div className="flex flex-wrap justify-center align-center ">
          {results?.map(({ additional_links }, index) => (
            <div key={index} className="p-2">
              <ReactPlayer
                className="m-1"
                url={additional_links?.[0].href}
                controls
                width="300px"
                height="250px"
              />
            </div>
          ))}
        </div>
      );
    default:
      return "error..";
  }
};

export default Results;
