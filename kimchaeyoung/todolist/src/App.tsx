import styled, { ThemeProvider } from "styled-components";
import theme from "@/style/theme";
import ToDoForm from "@/components/ToDoForm";
import ToDo from "@/components/ToDo";
import ToDoFilter from "@/components/ToDoFilter";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import GlobalFont from "@/style/GlobalFont";

const Container = styled.div`
    width: 520px;
    padding: 40px 28px 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "pretendard";
`;

const Date = styled.h1`
    font-size: ${theme.fontSize.h1};
    font-weight: 600;
    line-height: 36px;
    width: 100%;
    margin: 0;
    color: ${theme.colors.gray800};
`;

export type FilterType = {
    id: string;
    name: string;
};

export type ToDoType = {
    id: number;
    name: string;
    done: boolean;
};

function App() {
    const [todo, setTodo] = useState(() => {
        if (typeof window !== "undefined") {
            const currentTodo = localStorage.getItem("todo");
            if (currentTodo !== null) {
                return JSON.parse(currentTodo);
            } else {
                return [];
            }
        }
    });

    const [filter, setFilter] = useState([
        {
            id: "all",
            name: "전체",
        },
        {
            id: "active",
            name: "할 일",
        },
        {
            id: "complete",
            name: "완료",
        },
    ]);

    const [activeFilter, setActiveFilter] = useState("all");
    const [filteredTodo, setFilteredTodo] = useState([...todo]);

    useEffect(() => {
        if (activeFilter === "all") {
            return setFilteredTodo([...todo]);
        } else if (activeFilter === "active") {
            setFilteredTodo(todo.filter((item: any) => !item.done));
        } else if (activeFilter === "complete") {
            setFilteredTodo(todo.filter((item: any) => item.done));
        }
    }, [activeFilter, todo]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalFont />
            <div className="App">
                <Container>
                    <Date>{dayjs().format("YYYY년 MM월 DD일")}</Date>
                    <ToDoFilter
                        filter={filter}
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                        todo={todo}
                    />
                    <ToDoForm
                        placeholder="할 일을 추가해주세요"
                        color={theme.colors.primary}
                        todo={todo}
                        setTodo={setTodo}
                    />
                    <ToDo
                        color={theme.colors.primary}
                        filteredTodo={filteredTodo}
                        todo={todo}
                        setTodo={setTodo}
                    />
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;
