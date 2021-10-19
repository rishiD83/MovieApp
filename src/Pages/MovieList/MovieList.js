import React from "react";
import Favourite from "../../Common/Favourite";
import "./MovieList.css";

function MovieList(props) {

  console.log(props.favoriteMovies);
  return (
    <>
      <div className="container">
        <div className="movieContainer">
          {props.favoriteMovies.map((movie, index) => (
            <div key={movie.title} className="listItem">
              <li className="movieName">{movie.title}</li>
              <div
                className="favContainer"
                onClick={() => props.sendFavoriteMovie(index)}
              >
                <Favourite
                  color={movie.likes.indexOf(props.user) > -1 ? "red" : "gray"}
                />
              </div>

              <div className="count">{movie.likes.length}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieList;
