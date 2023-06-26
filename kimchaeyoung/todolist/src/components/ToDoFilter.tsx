import theme from "@/style/theme";
import styled from "styled-components";
import { FilterType, ToDoType } from "@/App";

const ToDoFilterList = styled.ul`
    list-style: none;
    display: flex;
    gap: 24px;
    width: 100%;
    padding: 0;
    margin: 24px 0 28px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${theme.colors.gray200};
    li {
        color: ${theme.colors.gray400};
        font-size: ${theme.font.body1.fontSize};
        line-height: ${theme.font.body1.lineHeight};
        font-weight: ${theme.font.body1.fontWeight};
        cursor: pointer;
        &.active {
            font-weight: 600;
            color: ${theme.colors.primary};
            position: relative;
            padding-bottom: 4px;
            &::after {
                content: "";
                display: inline-block;
                width: 100%;
                height: 2px;
                background-color: ${theme.colors.primary};
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
    }
`;

interface TodoFlterProps {
    filter: FilterType[];
    activeFilter: string;
    todo: ToDoType[];
    setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}

function ToDoFilter({
    filter,
    activeFilter,
    todo,
    setActiveFilter,
}: TodoFlterProps) {
    const todoLength = (id: string) => {
        switch (id) {
            case "all":
                return todo.length;
            case "active":
                return todo.filter((item: ToDoType) => !item.done).length;
            case "complete":
                return todo.filter((item: ToDoType) => item.done).length;
        }
    };

    return (
        <ToDoFilterList>
            {filter &&
                filter.map((item: any, i: number) => {
                    return (
                        <li
                            key={i}
                            id={item.id}
                            className={
                                item.id === activeFilter
                                    ? "filter active"
                                    : "filter"
                            }
                            onClick={() => setActiveFilter(item.id)}
                        >
                            {item.name} <span>{todoLength(item.id)}</span>
                        </li>
                    );
                })}
        </ToDoFilterList>
    );
}

export default ToDoFilter;
