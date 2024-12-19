import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // setIndex.toUpperCase(text);
    // console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // text = "new text"; // Wrong way to change the state
  // setIndex("new text"); // Correct way to change the state
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
