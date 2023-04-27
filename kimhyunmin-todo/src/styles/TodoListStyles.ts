import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoWrapper = styled.div`
  width: 520px;
  height: 1000px;
  background: #ffffff;
  padding: 40px 24px 0px 24px;

  @media screen and (max-width: 767px) {
    position: static;
    width: 100vw;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  margin-top: 24px;
`;
