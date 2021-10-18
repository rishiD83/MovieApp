import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import MovieList from "../Pages/MovieList/MovieList";
import { Button } from "@material-ui/core";

function RouteComponent(props) {
  const [user, setUser] = useState({ name: "", username: "" });
  const [error, setError] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState({
    movieName: "",
    likes: [],
  });
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

  const saveFavoriteMovies = (items) => {
    localStorage.setItem("favouriteMovies", JSON.stringify(items));
  };

  const getFavoriteMovie = (movie) => {
    const newLikes = [user.username];
    setFavoriteMovies({
      ...favoriteMovies,
      movieName: [...favoriteMovies.movieName, movie],
      likes: [...favoriteMovies.likes, newLikes],
    });
    saveFavoriteMovies(favoriteMovies);
  };

  const removeFavoriteMovie = (url) => {
    const newFavList = favoriteMovies.movieName.filter((item) => item !== url);
    setFavoriteMovies(newFavList);
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
    setUser({ name: "", id: "" });
    saveUser("");
    window.location.reload();
  };

  console.log(favoriteMovies);

  return (
    <BrowserRouter>
      <div className="navigation">
        {user.username !== "" && (
          <Button variant="outlined" onClick={logout}>
            Logout
          </Button>
        )}
      </div>
      {user.username !== "" ? (
        <MovieList
          sendFavoriteMovie={getFavoriteMovie}
          favoriteMovies={favoriteMovies}
          removeFavoriteMovie={removeFavoriteMovie}
        />
      ) : (
        <Login login={login} error={error} />
      )}
    </BrowserRouter>
  );
}

export default RouteComponent;
