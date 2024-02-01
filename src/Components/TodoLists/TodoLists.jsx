import React from "react";
import "./TodoList.css";

export default function TodoLists(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={() => {
            props.deleteItem(props.index);
          }}
        ></i>
      </span>
    </li>
  );
}
