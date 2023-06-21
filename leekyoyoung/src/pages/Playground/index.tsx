import { firestore } from "@/firebase";
import useDidMountEffect from "@/hooks/common/useDidMountEffect";
import { ListItem } from "@/type/todolisttype";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import uuid from "react-uuid";

const PlaygroundPage = () => {
    const [todoList, setTodoList] = useState<ListItem[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [inputDate, setInputDate] = useState<string>('');

    const addTestData = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const newItem: ListItem = { id: uuid(), text: inputValue, checked : false, inputDate: inputDate};
            const docRef = await addDoc(collection(firestore, "todolist"), {
                id: uuid(),
                text: inputValue,
                inputDate : inputDate,
                checked: false
            });
            setTodoList([...todoList, newItem]);
            setInputValue("");

            console.log('docRef: ', docRef.id);
        } catch(error) {
            console.error(error)
        }
    }

    const handleOnChageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setInputValue(e.target.value);
        } catch(error) {
            console.error(error)
        }
    }

    const getTestDate = async () => {
        try {
            const querySnapshot = await getDocs(collection(firestore, "todolist")); 
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id}:`, doc.data());

                // const responesTodoItem = doc.data() as ListItem[];
                const responesTodoItem = querySnapshot.docs.map((doc) => doc.data() as ListItem);
                setTodoList(responesTodoItem);
            });
        }catch (error) {
            console.error(error);
        }
        
    }


    useDidMountEffect(()=> {
        getTestDate();
    },[]);

    return <>
        <form action="" >
            <input type="text" id="text-input" name="text-input" placeholder="text 입력" onChange={handleOnChageInput} />
            <button onClick={addTestData}>추가하기</button>
        </form>
        {
            todoList.map(({text, inputDate, id}) => 
                <div key={id}>
                    <p>{text}</p>
                    <p>{inputDate}</p>
                </div>
            )
        }
    </>
}

export default PlaygroundPage;