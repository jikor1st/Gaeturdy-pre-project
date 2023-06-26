import theme from "@/style/theme";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ToDoType } from "@/App";
import ToDoButton from "./ToDoButton";
import dayjs from "dayjs";

const FormContainer = styled.div`
    display: flex;
    gap: 20px;
    flex: 1;
    width: 100%;
`;

const Input = styled.input`
    border: 1px solid ${theme.colors.gray200};
    border-radius: 8px;
    padding: 13px 12px;
    flex: 1;
    &::placeholder {
        color: ${theme.colors.gray400};
    }
`;

interface Props {
    placeholder: string;
    color: string;
    todo: ToDoType[];
    setTodo: React.Dispatch<React.SetStateAction<ToDoType[]>>;
}

function ToDoForm({ placeholder, color, todo, setTodo }: Props) {
    const [inputValue, setInputValue] = useState("");

    const onSubmit = () => {
        setTodo([
            {
                id: todo.length + 1,
                name: inputValue,
                done: false,
                create: dayjs().format("YYYY.MM.DD HH:MM"),
            },
            ...todo,
        ]);
        localStorage.setItem(
            "todo",
            JSON.stringify({
                name: todo,
                done: false,
                create: dayjs().format("YYYY.MM.DD HH:MM"),
            })
        );
        setInputValue("");
    };

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo));
        console.log(todo);
    }, [todo]);

    return (
        <FormContainer>
            <Input
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <ToDoButton
                color={color}
                title="추가"
                size="large"
                onSubmit={onSubmit}
            />
        </FormContainer>
    );
}

export default ToDoForm;
