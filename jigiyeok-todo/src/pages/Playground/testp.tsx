import { getTodos } from "@/firebase/api/todo";
import { createTodo } from "@/firebase/api/todoTest";
import { TodoItemType } from "@/types/todoList";
import { useEffect, useState } from "react";

const TestPPage = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);

  const fetchTodos = async () => {
    const data = await getTodos();

    setTodoList(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <>
      <div
        style={{
          padding: 20,
          display: "flex",
          gap: 8,
        }}
      >
        <input
          placeholder="할 일 입력"
          value={todoValue}
          onChange={(event) => {
            setTodoValue(event.target.value);
          }}
        />
        <button
          onClick={async () => {
            try {
              await createTodo(todoValue);
              setTodoValue("");
              fetchTodos();
            } catch (error) {
              alert("");
            }
          }}
        >
          생성
        </button>
      </div>
      {todoList.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: 8,
              borderBottom: "1px solid gray",
            }}
          >
            <p>{item.title}</p>
            <button>삭제</button>
          </div>
        );
      })}
    </>
  );
};

export default TestPPage;
