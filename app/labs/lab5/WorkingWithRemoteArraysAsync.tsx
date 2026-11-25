"use client";
import { useEffect, useState } from "react";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
type Todo = {
  id: number;
  title: string;
  completed: boolean;
  editing?: boolean;
};
export default function WorkingWithRemoteArraysAsynchronously() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fetchTodos = async () => {
    setTodos(await client.fetchTodos());
  };
  const removeTodo = async (todo: Todo) => {
    setTodos(await client.removeTodo(todo));
  };
  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };
  const editTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };
  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };
  useEffect(() => { fetchTodos(); }, []);
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <p id="wd-todo-error-message" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <h4 className="flex items-center gap-3">
        Todos
        <FaPlusCircle onClick={createNewTodo} id="wd-create-todo"
          className="cursor-pointer text-green-600" />
        <FaPlusCircle onClick={postNewTodo} id="wd-post-todo"
          className="cursor-pointer text-blue-600" />
      </h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2 flex flex-wrap items-center gap-2">
            <FaTrash onClick={() => removeTodo(todo)} id="wd-remove-todo"
              className="cursor-pointer text-red-600" />
            <TiDelete onClick={() => deleteTodo(todo)} id="wd-delete-todo"
              className="cursor-pointer text-2xl text-red-600" />
            <FaPencilAlt onClick={() => editTodo(todo)} className="cursor-pointer text-blue-600" />
            <input type="checkbox" checked={todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} />
            {todo.editing ? (
              <input
                className="rounded border border-neutral-300 px-2 py-1"
                defaultValue={todo.title}
                onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
              />
            ) : (
              todo.title
            )}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
