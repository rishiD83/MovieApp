import React from "react";
import Favourite from "../../Common/Favourite";
import "./MovieList.css";

function MovieList(props) {
  var movies = [
    {
      title: "Forest Gump",
      yearReleased: 1994,
      director: "Robert Zemeckis",
      genre: "Comedy",
    },
    {
      title: "Harry Potter",
      yearReleased: 2001,
      director: "Mike Newell",
      genre: "Fantasy Fiction",
    },
    {
      title: "Titanic",
      yearReleased: 1998,
      director: "James Cameron",
      genre: "Romance",
    },
    {
      title: "Best Worst Movie",
      yearReleased: 2009,
      director: "Michael Stephen",
      genre: "Comedy",
    },
    {
      title: "Troll 2",
      yearReleased: 2003,
      director: "Shawn Black",
      genre: "Horror",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="movieContainer">
          {movies.map((movie) => (
            <div key={movie.title} className="listItem">
              <li className="movieName">{movie.title}</li>
              <div className="favContainer">
                <Favourite />
              </div>
              <div className="count"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieList;