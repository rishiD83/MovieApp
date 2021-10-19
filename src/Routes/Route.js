import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import MovieList from "../Pages/MovieList/MovieList";
import { Button } from "@material-ui/core";
import Favourite from "../Common/Favourite";

function RouteComponent(props) {
  const [user, setUser] = useState({ name: "", username: "" });
  const [error, setError] = useState("");
  let moviesList;

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

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
  if (localStorage.getItem("favoriteMovies") !== null) {
    moviesList = JSON.parse(localStorage.getItem("favoriteMovies"));
  } else {
    moviesList = movies;
    localStorage.setItem("favoriteMovies", JSON.stringify(movies));
  }
  const users = [
    { name: "Arnold", username: "arnold", password: "arnold123" },
    { name: "John", username: "john", password: "john123" },
    { name: "Steve", username: "steve", password: "steve123" },
    { name: "Mark", username: "mark", password: "mark123" },
    { name: "Peter", username: "peter", password: "peter123" },
  ];

  const saveUser = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const saveFavoriteMovies = (index) => {
    if (localStorage.getItem("favoriteMovies") !== null) {
      let favMovies = localStorage.getItem("favoriteMovies");
      favMovies = JSON.parse(favMovies);
      let value = favMovies[index];
      let valueIndex = value.likes.indexOf(currentUser);
      if (valueIndex > -1) {
        value.likes.splice(valueIndex, 1);
      } else {
        value.likes.push(currentUser);
      }
      localStorage.setItem("favoriteMovies", JSON.stringify(favMovies));
      window.location.reload();
    }
  };

  const getFavoriteMovie = (index) => {
    console.log(index);
    saveFavoriteMovies(index);
  };

  const removeFavoriteMovie = (movie) => {
    const newFavList = moviesList.filter(
      (item) => Object.keys(item)[0] !== movie
    );
    saveFavoriteMovies(newFavList);
  };

  const login = (details) => {
    users.map((user) =>
      user.username === details.username && user.password === details.password
        ? setUser({ name: user.name, username: details.username })
        : setError("Invalid Credentials")
    );
    saveUser(details.username);
  };
  const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  };

  return (
    <BrowserRouter>
      <div className="navigation">
        {currentUser !== null && (
          <>
            <Button variant="outlined" onClick={logout}>
              Logout : {currentUser}
            </Button>
          </>
        )}
      </div>
      {currentUser !== null ? (
        <MovieList
          user={currentUser}
          sendFavoriteMovie={getFavoriteMovie}
          favoriteMovies={moviesList}
          removeFavoriteMovie={removeFavoriteMovie}
        />
      ) : (
        <Login login={login} error={error} />
      )}
    </BrowserRouter>
  );
}

export default RouteComponent;
