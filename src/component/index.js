import { React } from "react";
import "./index.css";
import Button from "./button/index";
import useFeatures from "./useFeatures";

function Main() {
  
  const [
    value,
    todos,
    addTodos,
    inputText,
    todoDelete,
    todoToggler,
  ] = useFeatures();

  return (
    <div>
      <div className="inputBox">
        <input value={value} onChange={inputText}></input>
        <button onClick={addTodos}>輸入</button>
      </div>
      {todos.map((item) => {
        return (
          <Button
            key={item.id}
            todo={item}
            todoDelete={todoDelete}
            todoToggler={todoToggler}
          />
        );
      })}
    </div>
  );
}
export default Main;
