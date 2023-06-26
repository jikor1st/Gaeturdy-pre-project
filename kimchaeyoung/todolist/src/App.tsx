import styled, { ThemeProvider } from "styled-components";
import theme from "@/style/theme";
import ToDoForm from "@/components/ToDoForm";
import ToDo from "@/components/ToDo";
import ToDoFilter from "@/components/ToDoFilter";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import GlobalFont from "@/style/GlobalFont";
import Modal from "./components/ModalPortal";

export type FilterType = {
    id: string;
    name: string;
};

export type ToDoType = {
    id: number;
    name: string;
    done: boolean;
    create: string;
};

function App() {
    const [todo, setTodo] = useState(() => {
        const getTodo = localStorage.getItem("todo");
        return getTodo ? JSON.parse(getTodo) : [];
    });

    const filter = [
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
    ];

    const [activeFilter, setActiveFilter] = useState("all");
    const [filteredTodo, setFilteredTodo] = useState([...todo]);

    const [isShow, setIsShow] = useState(false);

    const toggleModal = () => {
        if (isShow) {
            setIsShow(false);
        } else {
            setIsShow(true);
        }
    };

    useEffect(() => {
        if (activeFilter === "all") {
            return setFilteredTodo([...todo]);
        } else if (activeFilter === "active") {
            setFilteredTodo(todo.filter((item: ToDoType) => !item.done));
        } else if (activeFilter === "complete") {
            setFilteredTodo(todo.filter((item: ToDoType) => item.done));
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
                        toggleModal={toggleModal}
                    />
                </Container>
                <Modal
                    headline="할 일 삭제"
                    contents="할 일을 삭제하시겠습니까?"
                    buttonTitle="삭제"
                    buttonColor={theme.colors.red}
                    toggleModal={toggleModal}
                    isShow={isShow}
                />
            </div>
        </ThemeProvider>
    );
}

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

const Date = styled.h3`
    font-size: ${theme.font.h3.fontSize};
    line-height: ${theme.font.h3.lineHeight};
    font-weight: ${theme.font.h3.fontWeight};
    width: 100%;
    margin: 0;
    color: ${theme.colors.gray800};
`;

export default App;
