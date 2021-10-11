import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../Pages/Login/Login";
import AuthRoute from "./AuthRoute";
import NotFound from "../Pages/NotFound/NotFound";
import MovieList from "../Pages/MovieList/MovieList";

function RouteComponent(props) {
  const [user, setUser] = useState({ name: "", id: "" });
  const [error, setError] = useState("");
  const users = [
    { name: "Arnold", id: "arnold", password: "arnold123" },
    { name: "John", id: "john", password: "john123" },
    { name: "Steve", id: "steve", password: "steve123" },
    { name: "Mark", id: "mark", password: "mark123" },
    { name: "Peter", id: "peter", password: "peter123" },
  ];

  const login = (details) => {
    users.map(
      (user) => user.id === details.id && user.password === details.password
    ) && console.log(user.id, user.name);
  };

  const logout = () => {
    console.log("Logout");
  };

  return (
    <BrowserRouter>
      <MovieList />
      {/* {user.id !== "" ? <MovieList /> : <Login login={login} error={error} />} */}
    </BrowserRouter>
  );
}

export default RouteComponent;
