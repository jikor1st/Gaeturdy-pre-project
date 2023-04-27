import React from 'react';
import './App.css';
import GlobalStyle from '@/styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme'
import TodoList from '@/components/common/TodoList';
import TabMenu from '@/components/common/TabMenu';
import TabContents from '@/components/common/TabContents';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoList 
        title="2023년 4월 18일"
      >
        <TabMenu />
        <TabContents 
          placeholder = "할 일을 추가해주세요"
          btntxt = "추가"
        />
      </TodoList>
      {""}
    </ThemeProvider>
  );
}

export default App;
