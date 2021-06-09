import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { configureAppStore } from "./store/configureStore";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

export const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={"App-header"}>
          <Router />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
