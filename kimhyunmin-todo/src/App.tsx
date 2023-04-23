import React from 'react';
import GlobalStyles from '@/styles/GlobalStyles';
import TodoList from '@/components/TodoList';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <TodoList />
    </>
  );
}

export default App;
