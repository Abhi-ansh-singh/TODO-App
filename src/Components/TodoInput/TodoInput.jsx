import React, { useState } from "react";
import "./TodoInput.css";

export default function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="input-box-todo"
          placeholder="Enter Your TODO"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button
          className="btn-add"
          onClick={() => {
            props.addList(inputText);
            setInputText("");
          }}
        >
          ADD
        </button>
      </div>
    </>
  );
}
