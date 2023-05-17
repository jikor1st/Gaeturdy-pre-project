import { useEffect, useMemo, useState } from "react";
import {
  HomeWrapper,
  HomeStickyHeader,
  HomeTabWrapper,
  TodoInputWrapper,
  TodoListWrapper,
} from "@/components/Home/Home.styles";
import Button from "@/components/common/Button";
import Tab from "@/components/common/Tab";
import TextField from "@/components/common/TextField";
import TodoItem from "@/components/common/TodoItem";
import { v4 } from "uuid";
import localStorageController from "@/utils/localStorageController";
import { useNavigate, useParams } from "react-router-dom";
import { TodoItemType } from "@/types/todoList";
import dayjs from "dayjs";
import CommonHeader from "@/components/common/CommonHeader";
import CommonLayout from "@/components/common/CommonLayout";

type TodoListParamsType = {
  view?: "todo" | "complete";
};

const HomePage = () => {
  const today = dayjs();
  const navigate = useNavigate();
  const params = useParams<TodoListParamsType>();
  const paramsView = params.view || "all";
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState<TodoItemType[]>(
    localStorageController.getItem("todoList") || []
  );

  const filterdTodoList = useMemo(
    () => ({
      all: todoList,
      todo: todoList.filter((item) => !item.checked),
      complete: todoList.filter((item) => item.checked),
    }),
    [todoList, paramsView]
  );

  const displayTodoList = filterdTodoList[paramsView];

  const todoTabList = [
    { title: "전체", path: "/", view: "all" },
    {
      title: "할 일",
      path: "/todo",
      view: "todo",
    },
    {
      title: "완료",
      path: "/complete",
      view: "complete",
    },
  ] as const;

  useEffect(() => {
    localStorageController.setItem("todoList", todoList);
  }, [todoList]);

  return (
    <CommonLayout.Wrapper>
      <HomeWrapper>
        <HomeStickyHeader>
          <CommonHeader>
            <CommonHeader.Title>
              {today.format("YYYY년 MM월 DD일")}
            </CommonHeader.Title>
            <CommonHeader.MenuButton />
          </CommonHeader>
          <CommonLayout.Container>
            <HomeTabWrapper>
              {todoTabList.map(({ title, path, view }) => {
                return (
                  <Tab
                    isActive={paramsView === view}
                    onClick={() => {
                      navigate(path);
                    }}
                    key={title}
                  >
                    {title}{" "}
                    {formatMaxTodoTabCount(filterdTodoList[view].length)}
                  </Tab>
                );
              })}
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
                      createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
                    },
                  ]);
                  setTodoText("");
                }}
              >
                추가
              </Button>
            </TodoInputWrapper>
          </CommonLayout.Container>
        </HomeStickyHeader>
        <CommonLayout.Container>
          <TodoListWrapper>
            {displayTodoList.map(({ id, title, checked }) => (
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
        </CommonLayout.Container>
      </HomeWrapper>
    </CommonLayout.Wrapper>
  );
};

export default HomePage;

const MAX_TODO_TAB_COUNT = 99;
const formatMaxTodoTabCount = (count: number) => {
  return count > MAX_TODO_TAB_COUNT ? MAX_TODO_TAB_COUNT + "+" : count;
};
