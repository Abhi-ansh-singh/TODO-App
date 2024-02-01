import React, { useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoLists/TodoLists";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (todoInput) => {
    setListTodo([...listTodo, todoInput]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <>
      <div className="main-container">
        <div className="header">
          <span className="title">Todo</span>
          App
        </div>

        <hr />
        <TodoInput addList={addList} />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
