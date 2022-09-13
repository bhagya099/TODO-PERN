import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  const getTodo = async () => {
    try {
      const response = await fetch("http://localhost:5008/todos");
      const jsonData = await response.json();
      console.log(jsonData);
      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5008/todos/${id}`, {
        method: "DELETE",
      });

      console.log(deleteTodo);
      //changing the data which deleted
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
