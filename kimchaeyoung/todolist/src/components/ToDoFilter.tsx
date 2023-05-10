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
        font-size: ${theme.fontSize.body2};
        cursor: pointer;
        &.active {
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

interface Props {
    filter: FilterType[];
    activeFilter: string;
    todo: ToDoType[];
    setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}

function ToDoFilter({ filter, activeFilter, todo, setActiveFilter }: Props) {
    const todoLength = (id: string) => {
        switch (id) {
            case "all":
                return todo.length;
            case "active":
                return todo.filter((item: any) => !item.done).length;
            case "complete":
                return todo.filter((item: any) => item.done).length;
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
