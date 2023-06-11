import {
  addDoc,
  getDocs,
  query,
  doc,
  updateDoc,
  deleteDoc,
  collection,
  limit,
  startAfter,
  orderBy,
  QueryConstraint,
  where,
  Query,
  DocumentData,
} from "firebase/firestore";
import { TodoItemType } from "@/types/todoList";
import { firestore } from "../initialize";
import dayjs from "dayjs";

const todoCollectionRef = collection(firestore, "todo");

export const getTodos = async () => {
  const _query = query(todoCollectionRef);

  const data = await getDocs(_query);
  return data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as TodoItemType[];
};

export const createTodo = (title: string) => {
  const createdAt = dayjs().format("YYYY-MM-DD HH:mm:ss:SSS");

  return addDoc(todoCollectionRef, {
    title,
    checked: false,
    createdAt,
    updatedAt: createdAt,
  });
};

export const deleteTodo = (todoId: string) => {
  const _doc = doc(firestore, "todo", todoId);
  return deleteDoc(_doc);
};
