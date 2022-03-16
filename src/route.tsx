import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import store from "./store";
import Events from "./pages/eventsPage/EventsPage";
import "./App.css";
import Login from "./pages/loginPage/LoginPage";
import { loginSuccess } from "./redux/actions";
import AddEvent from "./pages/addEventPage/AddEventPage";

export default function RouteApp() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("user-token") as string;
  useEffect(() => {
    dispatch(loginSuccess(token));
  });

  return (
    <Routes>
      <Route index element={<Events />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add-event" element={<AddEvent />} />
    </Routes>
  );
}
