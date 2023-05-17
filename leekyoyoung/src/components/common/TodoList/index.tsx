import styled, {css} from "styled-components";

interface TodoListProps {
    children: React.ReactNode;
    title: string;
}
const TodoList = ({ children, title }: TodoListProps) => {
    return (
    <TodoWrapper>
        <Title>{title}</Title>
        {children}
    </TodoWrapper>
    )
};
export default TodoList;

export const TodoWrapper = styled.div`
    padding: 10px 16px 0;
`

export const Title = styled.h3 `
    color:${props=>props.theme.colors.Gray800};
    font-size:${props=>props.theme.H3.FontSize};
    font-weight:${props=>props.theme.H3.FontWeight};
    line-height:${props=>props.theme.H3.LineHight};
`