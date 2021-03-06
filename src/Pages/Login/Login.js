import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import "./Login.css";
import { Button } from "@material-ui/core";
function Login({ login, error }) {
  const [details, setDetails] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(details);
  };

  return (
    <div className="container">
      <div className="loginContainer">
        <div className="login">
          <h2>Login</h2>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            value={details.username}
          />{" "}
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          {}
          <Button variant="outlined" onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
