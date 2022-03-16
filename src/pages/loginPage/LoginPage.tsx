import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions";
import classes from "./LoginPage.module.css";

function LoginPage() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const updateFormState = (key: string, value: string) => {
    setFormState({
      ...formState,
      [key]: value,
    });
  };
  const navigate = useNavigate();
    const dispatch = useDispatch();
    
  const handleLogin = () => {
    dispatch(login(formState.email, formState.password));
    navigate("/");
  };
  return (
    <>
      <div className={classes.login_container}>
              <div className={classes.login_title}>Login</div>
              <form className={classes.form}>
          <div>
            <input
              className={classes.email_input}
              onChange={(e) => updateFormState("email", e.target.value)}
              value={formState.email}
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className={classes.password_input}
              onChange={(e) => updateFormState("password", e.target.value)}
              value={formState.password}
              type="password"
              placeholder="Password"
            />
          </div>
          <button className={classes.login_button} onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
