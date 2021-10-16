import React from "react";
import RouteComponent from "./Routes/Route";
// import { Provider } from "react-redux";
// import store from "./Redux/Store";

function App(props) {
  return (
    // <Provider store={store}>
      <div>
        <RouteComponent />
      </div>
    // </Provider>
  );
}

export default App;
