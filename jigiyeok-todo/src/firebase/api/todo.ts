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

type GetTodoListProps = {
  lastCreatedAt: string | null;
  limitParam: number;
  filter?: "complete";
};
export const getTodoList = async ({
  lastCreatedAt,
  limitParam,
  filter,
}: GetTodoListProps) => {
  const orderQuery = orderBy("createdAt", "desc");
  const limitQuery = limit(limitParam);
  const startAfterQuery = startAfter(lastCreatedAt);

  type QueriesType = [Query<DocumentData>, ...QueryConstraint[]];
  const defaultQueryOptions: QueriesType = [todoCollectionRef, limitQuery];

  let resultQuery = query(...defaultQueryOptions);

  // INFO: 페이지네이션
  if (lastCreatedAt) {
    resultQuery = query(...defaultQueryOptions, startAfterQuery);
  }

  // if (filter === "complete") {
  //   const completeQuery = where("checked", "==", true);
  //   console.log("completeQuery: ", completeQuery);
  //   // resultQuery = query(todoCollectionRef, completeQuery, limitQuery);
  //   console.log("last-");

  //   if (lastCreatedAt) {
  //     console.log("last-");
  //     //   resultQuery = query(
  //     //     ...defaultQueryOptions,
  //     //     completeQuery,
  //     //     startAfterQuery
  //     //   );
  //   }
  // }

  const documentSnapshots = await getDocs(resultQuery);

  return documentSnapshots.docs.map((doc) => ({
    ...(doc.data() as TodoItemType),
    id: doc.id,
  }));
};

export const createTodo = async (title: TodoItemType["title"]) => {
  const createdAt = dayjs().format("YYYY-MM-DD HH:mm:ss:SSS");

  const createTodoData = {
    title,
    createdAt,
    updatedAt: createdAt,
    checked: false,
  };
  return await addDoc(todoCollectionRef, createTodoData);
};

export const updateTodo = async (
  todoId: string,
  todoData: Partial<TodoItemType>
) => {
  const _doc = doc(firestore, "todo", todoId);
  return await updateDoc(_doc, todoData);
};

export const deleteTodo = (todoId: string) => {
  const _doc = doc(firestore, "todo", todoId);
  return deleteDoc(_doc);
};
