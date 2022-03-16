import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, fetchEvents, logout, login } from "../../redux/actions";

import APPLOGO from "../assets/appoga-logo.png";
import classes from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

    const { token }: any = useSelector((state) => state);

  const logoHandler = () => {
    navigate("/");
  };

  const loginHandler = () => {
    navigate("/login");
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={classes.heading}>
      <div onClick={logoHandler}>
        <img src={APPLOGO} />
      </div>
      <div className={classes.header_text}>
        <h2>NEVER MISS AN EVENT WITH TECH-City</h2>
      </div>
      <div>
        {!token && (
          <div className={classes.login_button}>
            <button onClick={loginHandler}>Login</button>
          </div>
        )}
        {token && (
          <div className={classes.login_button}>
            <button onClick={logoutHandler}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
