import React, { useState, useEffect } from "react";
import Links from "./Links";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../context/ResultContextProvider";

const Search = () => {
  const [text, setText] = useState("");
  const [debouncedValue] = useDebounce(text, 300);
  const { setSearchTerm } = useResultContext();

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className=" relatvie sm:ml-48 md:ml-72 sm:-mt-10 mt-3  ">
      <input
        type="text"
        value={text}
        className="sm:w-80  w-1-- h-10 dark:bg-gray-200 border rounded-full shadow  "
        placeholder="Search Goggle or Enter Url "
        onChange={(e) => setText(e.target.value)}
      />
      {!text && (
        <button
          type="button"
          className="absolute sm:top-6 sm:right-40 text-2xl text-gray-500 "
          onClick={() => setText("")}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
