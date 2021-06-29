import { useState, useRef } from "react";

export default function useFeatures() {
  const id = useRef(2);
  const [value, setValue] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "預設",
      isDone: false,
    },
  ]);

  function addTodos() {
    setTodos([
      ...todos,
      {
        id: id.current,
        content: value,
        isDone: false,
      },
    ]);
    setValue("");
    id.current++;
  }
  function inputText(e) {
    setValue(e.target.value);
  }

  function todoDelete(id, isDone) {
    if (isDone === true) {
      return;
    }
    setTodos(todos.filter((item) => item.id !== id));
  }

  function todoToggler(id) {
    setTodos(
      todos.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return {
          ...item,
          isDone: !item.isDone,
        };
      })
    );
  }

  return [
    value,
    todos,
    addTodos,
    inputText,
    todoDelete,
    todoToggler,
  ];
}
