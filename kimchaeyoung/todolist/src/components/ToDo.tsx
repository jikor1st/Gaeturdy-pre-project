import styled from "styled-components";
import check from "@/icon/icon-checkbox.svg";
import checkBlue from "@/icon/icon-checkbox-blue.svg";
import checkDefault from "@/icon/icon-checkbox-default.svg";
import iconDeleteRed from "@/icon/icon-delete-red.svg";
import theme from "@/style/theme";
import { ToDoType } from "@/App";

const ToDoList = styled.ul`
    list-style: none;
    margin: 0;
    margin-top: 36px;
    padding: 0;
    flex: 1;
    width: 100%;
    li {
        & + li {
            margin-top: 28px;
        }
        &:hover {
            .delete {
                opacity: 1;
            }
        }
    }
    label {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        gap: 28px;
        position: relative;
    }
    input {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 1.25rem;
        height: 1.25rem;
        opacity: 0;
        &:checked ~ .label {
            color: ${theme.colors.gray400};
            &::before {
                background-image: ${(props) =>
                    props.color === theme.colors.primary
                        ? "url(" + checkBlue + ")"
                        : "url(" + check + ")"};
            }
        }
    }
    .label {
        padding-left: 44px;
        position: relative;
        color: ${theme.colors.gray800};
        font-size: ${theme.fontSize.body1};
        line-height: 32px;
        max-width: 376px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &::before {
            content: "";
            display: inline-block;
            width: 32px;
            height: 32px;
            position: absolute;
            top: 0;
            left: 0;
            background-image: url(${checkDefault});
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
    .delete {
        display: inline-block;
        width: 24px;
        height: 24px;
        background-image: url(${iconDeleteRed});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        opacity: 0;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        z-index: 1;
    }
`;

interface Props {
    color: string;
    filteredTodo: ToDoType[];
    todo: ToDoType[];
    setTodo: React.Dispatch<React.SetStateAction<ToDoType[]>>;
}

function ToDo({
    color,
    filteredTodo,
    todo,
    setTodo,
}: Props): React.ReactElement {
    const toggleDone = (e: any) => {
        const afterCheck = todo.map((item) =>
            item.id === Number(e.target.id)
                ? { ...item, done: !item.done }
                : item
        );
        setTodo(afterCheck);
        localStorage.setItem("todo", JSON.stringify(afterCheck));
    };
    const deleteTodo = (id: number) => {
        const afterDelete = todo.filter((el) => el.id !== id);
        setTodo(afterDelete);
    };
    return (
        <ToDoList>
            {filteredTodo &&
                filteredTodo.map((item: any) => (
                    <li key={item.id}>
                        <label htmlFor={item.id} color={color}>
                            <input
                                type="checkbox"
                                name={item.name}
                                value={item.name}
                                id={item.id}
                                checked={item.done}
                                onChange={(e) => toggleDone(e)}
                            />
                            <span className="label">{item.name}</span>
                            <i
                                className="delete"
                                onClick={() => deleteTodo(item.id)}
                            ></i>
                        </label>
                    </li>
                ))}
        </ToDoList>
    );
}

export default ToDo;