import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../../redux/actions";
import Select from "react-select";
import Modal from "../../components/modal/Modal";
import classes from "./AddEventPage.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();


const options: any = [
  { value: true, label: "True" },
  { value: false, label: "False" },
];

function AddEventPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token }: any = useSelector((state) => state);

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    category: "",
    isVirtual: false,
    date: "",
    address: "",
  });

  const updateFormState = (key: string, value: string | boolean) => {
    setFormState({
      ...formState,
      [key]: value,
    });
  };

  const handleAddEvent = (e: any) => {
    e.preventDefault();
    dispatch(addEvent(formState));
    toast("Event added successfull.....")
    navigate('/');
  };

  return (
    <>
      {token && (
        <div className={classes.login_container}>
          <div className={classes.login_title}>CREATE AN EVENT</div>
          <form className={classes.form}>
            <div>
              <input
                className={classes.text_input}
                onChange={(e) => updateFormState("title", e.target.value)}
                value={formState.title}
                type="text"
                placeholder="Title"
              />
            </div>
            <div>
              <input
                className={classes.text_input}
                onChange={(e) => updateFormState("description", e.target.value)}
                value={formState.description}
                type="text"
                placeholder="Description"
              />
            </div>
            <div>
              <input
                className={classes.text_input}
                onChange={(e) => updateFormState("category", e.target.value)}
                value={formState.category}
                type="text"
                placeholder="Category"
              />
            </div>
            <div>
              <Select
                defaultValue={formState.isVirtual}
                onChange={(e: any) => updateFormState("isVirtual", e.value)}
                options={options}
              />
            </div>
            <div>
              <input
                className={classes.text_input}
                onChange={(e) =>
                  updateFormState("date", e.target.value.split("-").join("/"))
                }
                value={formState.date.split("/").join("-")}
                type="date"
                placeholder="Date"
              />
            </div>
            <div>
              <input
                className={classes.text_input}
                onChange={(e) => updateFormState("address", e.target.value)}
                value={formState.address}
                type="text"
                placeholder="Address"
              />
            </div>
            <button
              className={classes.login_button}
              onClick={(e) => handleAddEvent(e)}
            >
              Add
            </button>
          </form>
        </div>
      )}
      {!token && <h1>Login to Add an event.........</h1>}
    </>
  );
}

export default AddEventPage;
