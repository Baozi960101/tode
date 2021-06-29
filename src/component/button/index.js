import { React, useState } from "react";
import "./index.css";


function Button({ todo, todoDelete, todoToggler }) {

  
  const todoTogglerChange = () => {
    todoToggler(todo.id);
  };

  const todoDeleteClick = () => {
    todoDelete(todo.id, todo.isDone);
  };

  return (
    <div>
      <div className="mainBox" dataId={todo.id}>
        <div className={todo.isDone ? "" : "falseContent"}>{todo.content}</div>
        <div className="ButtomBox">
          <button
            className={todo.isDone ? "trueColor" : "falseColor"}
            onClick={todoTogglerChange}
          >
            {todo.isDone ? "已完成" : "未完成"}
          </button>
          <button onClick={todoDeleteClick}>刪除</button>
        </div>
      </div>
    </div>
  );
}
export default Button;
