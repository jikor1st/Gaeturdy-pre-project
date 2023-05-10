import React from "react";
import TabWrapper from "@/styles/TodoTabsStyles";

const TodoTabs = () => {
  return (
    <div style={{ display: "flex" }}>
      <TabWrapper isActive={true}>전체 99+</TabWrapper>
      <TabWrapper isActive={false}>할 일 11</TabWrapper>
      <TabWrapper isActive={false}>완료 1</TabWrapper>
    </div>
  );
};

export default TodoTabs;
