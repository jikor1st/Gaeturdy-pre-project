import styled from "styled-components";

export const TodoWrapper = styled.div`
  position: absolute;
  width: 520px;
  height: 1000px;
  left: 700px;
  top: 40px;
  background: #FFFFFF;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 40px;

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
  background-color: #EEEEEE;
  margin-top: 24px;
`;
