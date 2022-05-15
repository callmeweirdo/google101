import React from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";
import Loading from "./Loading";
import ReactPlayer from "react-player";

const Results = () => {
  const { result, isLoading, searchTerm, setSearchTerm } = useResultContext();

  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case "/search":
      return "Searching";
    default:
      return "error..";
  }

  return <div>kjhgfd</div>;
};

export default Results;
