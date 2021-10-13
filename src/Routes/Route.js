import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import MovieList from "../Pages/MovieList/MovieList";
import { Button } from "@material-ui/core";

function RouteComponent(props) {
  const [user, setUser] = useState({ name: "", username: "" });
  const [error, setError] = useState("");
  const users = [
    { name: "Arnold", username: "arnold", password: "arnold123" },
    { name: "John", username: "john", password: "john123" },
    { name: "Steve", username: "steve", password: "steve123" },
    { name: "Mark", username: "mark", password: "mark123" },
    { name: "Peter", username: "peter", password: "peter123" },
  ];

  const login = (details) => {
    users.map((user) =>
      user.username === details.username && user.password === details.password
        ? setUser({ name: user.name, username: details.username })
        : setError("Invalid Credentials")
    );
  };
  const logout = () => {
    setUser({ name: "", id: "" });
    window.location.reload();
  };

  console.log("Name:", user.name, "Username:", user.username);

  return (
    <BrowserRouter>
      <div className="navigation">
        <Button variant="outlined" onClick={logout}>
          Logout
        </Button>
      </div>
      {/* <MovieList /> */}
      {user.username !== "" ? (
        <MovieList />
      ) : (
        <Login login={login} error={error} />
      )}
    </BrowserRouter>
  );
}

export default RouteComponent;
