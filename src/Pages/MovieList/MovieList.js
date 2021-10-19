import React from "react";
import Favourite from "../../Common/Favourite";
import "./MovieList.css";

function MovieList(props) {
  var movies = [
    {
      title: "Forest Gump",
      likes: [],
    },
    {
      title: "Harry Potter",
      likes: [],
    },
    {
      title: "Titanic",
      likes: [],
    },
    {
      title: "Best Worst Movie",
      likes: [],
    },
    {
      title: "Troll 2",
      likes: [],
    },
  ];

  console.log(props.favoriteMovies);
  return (
    <>
      <div className="container">
        <div className="movieContainer">
          {movies.map((movie) => (
            <div key={movie.title} className="listItem">
              <li className="movieName">{movie.title}</li>
              <div
                className="favContainer"
                onClick={() => props.sendFavoriteMovie(movie.title)}
              >
                <Favourite color="gray" />
              </div>
              {props.favoriteMovies.map((item) =>
                console.log(Object.keys(item), ":", movie.title)
              )}
              {props.favoriteMovies.map(
                (item) => Object.keys(item)[0] === movie.title
              ) ? (
                <div
                  className="favContainer"
                  onClick={() => props.removeFavoriteMovie(movie.title)}
                >
                  <Favourite color="red" />
                </div>
              ) : (
                <div
                  className="favContainer"
                  onClick={() => props.sendFavoriteMovie(movie.title)}
                >
                  <Favourite color="gray" />
                </div>
              )}
              {props.favoriteMovies.map((item) => (
                <div className="count">{Object.values(item).length}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieList;
