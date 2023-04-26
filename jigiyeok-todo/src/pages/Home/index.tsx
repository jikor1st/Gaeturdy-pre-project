import { useMemo, useState } from "react";
import {
  HomeContainer,
  HomeWrapper,
  HomeHeader,
  HomeDate,
  HomeTabWrapper,
  TodoInputWrapper,
  TodoListWrapper,
} from "@/components/Home/Home.styles";
import Button from "@/components/common/Button";
import Tab from "@/components/common/Tab";
import TextField from "@/components/common/TextField";
import TodoItem from "@/components/common/TodoItem";
import { v4 } from "uuid";

type TodoItemType = { id: string; title: string; checked: boolean };

const HomePage = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);

  const todoTabList = useMemo(
    () => [
      { title: "전체", count: todoList.length },
      {
        title: "할 일",
        count: todoList.filter((item) => !item.checked).length,
      },
      { title: "완료", count: todoList.filter((item) => item.checked).length },
    ],
    [todoList]
  );

  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeHeader>
          <HomeDate as="h1">2023년 4월 18일</HomeDate>
          <HomeTabWrapper>
            {todoTabList.map(({ title, count }) => (
              <Tab isActive={title === "전체"} key={title}>
                {title} {formatMaxTodoTabCount(count)}
              </Tab>
            ))}
          </HomeTabWrapper>
          <TodoInputWrapper>
            <TextField
              value={todoText}
              onChange={(event) => {
                setTodoText(event.target.value);
              }}
              placeholder="할 일을 추가해주세요"
            />
            <Button
              onClick={() => {
                if (todoText === "") return;
                setTodoList((prev) => [
                  ...prev,
                  {
                    title: todoText,
                    checked: false,
                    id: v4(),
                  },
                ]);
                setTodoText("");
              }}
            >
              추가
            </Button>
          </TodoInputWrapper>
        </HomeHeader>
        <TodoListWrapper>
          {todoList.map(({ id, title, checked }) => (
            <TodoItem
              title={title}
              checked={checked}
              onChangeChecked={() => {
                setTodoList((prev) =>
                  prev.map((item) =>
                    item.id === id
                      ? {
                          ...item,
                          checked: !item.checked,
                        }
                      : item
                  )
                );
              }}
              onDelete={() => {
                setTodoList((prev) => prev.filter((item) => item.id !== id));
              }}
              key={id}
            />
          ))}
        </TodoListWrapper>
      </HomeWrapper>
    </HomeContainer>
  );
};

export default HomePage;

const MAX_TODO_TAB_COUNT = 99;
const formatMaxTodoTabCount = (count: number) => {
  return count > MAX_TODO_TAB_COUNT ? MAX_TODO_TAB_COUNT + "+" : count;
};
