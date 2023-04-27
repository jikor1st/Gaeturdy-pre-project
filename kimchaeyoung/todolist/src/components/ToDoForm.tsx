import theme from "@/style/theme";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ToDoType } from "@/App";

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

const Button = styled.button`
    background-color: ${(props) => props.color};
    color: ${(props) =>
        props.color === theme.colors.primary ? theme.colors.white : "black"};
    border: none;
    border-radius: 8px;
    padding: 14px 15px;
    font-size: ${theme.fontSize.button1};
    font-weight: 600;
    cursor: pointer;
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
            { id: todo.length + 1, name: inputValue, done: false },
            ...todo,
        ]);
        localStorage.setItem(
            "todo",
            JSON.stringify({ name: todo, done: false })
        );
        setInputValue("");
    };

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo));
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
            <Button color={color} onClick={onSubmit}>
                추가
            </Button>
        </FormContainer>
    );
}

export default ToDoForm;
