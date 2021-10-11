import React from "react";
import { Route, Redirect } from "react-router-dom";
const AuthRoute = ({ component, path }) => {
  return (
    <Route
      render={(props) =>
        localStorage.auth_token ? (
          <div>
            <Redirect to="/" />
          </div>
        ) : (
          <Route exact path={path} component={component} />
        )
      }
    />
  );
};

export default AuthRoute;
