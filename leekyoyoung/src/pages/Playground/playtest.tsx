import { creatTodo, deletTodo, getTodos } from "@/firebase/api/todo";
import { ListItem } from "@/type/todolisttype";
import { useEffect, useState } from "react"
import dayjs from "dayjs";

const TestPage = () => {
    const [todoList, setTodoList] = useState<ListItem[]>([]);
    const [inputValue, setInputValue] = useState("");
    const fetchTodos = async () => {
        const data = await getTodos()

        setTodoList(data);
    }

    const handleinputChage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleSummit = async ()  => {
        try{
            await creatTodo(inputValue);
            setInputValue("");
            fetchTodos();

        } catch(error){

        }
    }

    useEffect(() => {
        fetchTodos();
    },[]);

    return <>
    <div style={{
        padding:20,
        display: "flex",
        gap: 8,
    }}>
        <input type="text" placeholder="할 일 입력"
        value={inputValue} 
        onChange={handleinputChage}
        />
        <button onClick={handleSummit}>생성</button>
    </div>
    {
        todoList.map((item)=> {
            return (
                <div key={item.id} style={{
                    display:"flex",
                    gap: 8,
                    borderBottom: "1px solid gray"
                }}>
                    <p>{item.text}</p>
                    <p>{item.inputDate}</p>
                    <button onClick={()=>{
                        try {
                            deletTodo(item.id);
                            fetchTodos();
                        } catch(error) {

                        }

                    }}>삭제</button>
                </div>
                )
            })
        
    }

    </>
} 

export default TestPage;