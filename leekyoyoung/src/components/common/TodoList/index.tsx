import styled, {css} from "styled-components";

interface TodoListProps {
    children: React.ReactNode;
    title: string;
}
const TodoList = ({ children, ...props }: TodoListProps) => {
    return (
    <TodoWrapper>
        <Title>{props.title}</Title>
        {children}
    </TodoWrapper>
    )
};
export default TodoList;

export const TodoWrapper = styled.div`
    padding: 40px 24px 0;
`

export const Title = styled.h1 `
    color:${props=>props.theme.colors.Gray800};
    font-size:${props=>props.theme.H1.FontSize};
    font-weight:${props=>props.theme.H1.FontWeight};
    line-height:${props=>props.theme.H1.LineHight};
`