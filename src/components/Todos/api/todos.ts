import axios from "axios";
import { ITodo, ITodoRequest } from "../types";

export async function getTodos(title: string) {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/todos${title ? "?title=" + title : ""}`
      );

    return data;
  } catch (err) {
    return err;
  }
}

export async function postTodo(body: ITodoRequest) {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/todos`,
      body
    );
    return data;
  } catch (error) {
    return error;
  }
}
export async function putTodo(body: ITodo) {
  try {
    const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/todos/${body.id}`, body);
    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteTodo(id: number) {
  try {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_API_URL}/todos/${id}`
    );
    return data;
  } catch (error) {
    return error;
  }
}
