import React from "react";

import classes from "./TextArea.module.css";

function InputSearch({ handleChange, placeholder, type }: any) {
  return (
    <input
      className={classes.text_area}
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
    />
  );
}

export default InputSearch;
