import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import RouteApp from "./route";
import Header from "./components/header/Header";
import './index.css'

export default function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <RouteApp />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
