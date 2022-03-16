import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions";
import classes from "./LoginPage.module.css";

function Login() {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });
}

const SignupPage = () => {
    
    return (
        <div><h2>Hello World!</h2></div>
    );
}

export default SignupPage