import React, { useState } from "react";
import movies from "./data.js";

function Search() {
  const [movieList, setMovieList] = useState(movies || []);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (typeKeyWord) => {
    setSearchValue(typeKeyWord);
    let newFilteredMovies = movieList.filter((movie) =>
      movie.name.toLowerCase().includes(typeKeyWord.toLowerCase())
    );
    setMovieList(typeKeyWord.length > 0 ? newFilteredMovies : movies);
  };

  return (
    <div className="p-5">
      <div className="border border-black flex items-center bg-white w-[500px] py-2 m-auto rounded-xl mb-3">
        <svg
          className="pl-3 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <input
          type="text"
          placeholder="Enter movie here..."
          className="pl-5 w-[100%] border-none outline-none"
          value={searchValue}
          onChange={(event) => {
            const typeKeyWord = event.target.value;
            handleSearch(typeKeyWord);
          }}
        />
      </div>
      <div className="flex flex-wrap gap-5 justify-start pl-24 p-5">
        {movieList && movieList.length > 0
          ? movieList.map((movie) => {
              return (
                <div
                  key={movie.id}
                  className="border hover:shadow-xl flex flex-col justify-center items-center  hover:text-orange-500"
                >
                  <img
                    src={movie.img}
                    alt={movie.name}
                    className="w-[200px] h-[200px] cursor-pointer"
                  />
                  <h3 className="font-bold cursor-pointer p-3">{movie.name}</h3>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Search;
