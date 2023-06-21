import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query } from "firebase/firestore";
import { firestore } from "..";
import { ListItem } from "@/type/todolisttype";
import dayjs from "dayjs";

const TodoCollectionRef = collection(firestore, "todolist")

export const getTodos = async () => {
    const _query = query(TodoCollectionRef);

    const data = await getDocs(_query);
    return data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    })) as ListItem[];
};

export const creatTodo = async(text:string) => {

    const inputDate = dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')

    return addDoc(TodoCollectionRef, {
        text,
        checked: false,
        inputDate
    })
}

export const deletTodo = async(todoId:string) => {
    const _doc = doc(firestore,"todolist",todoId);
    return deleteDoc(_doc);
}