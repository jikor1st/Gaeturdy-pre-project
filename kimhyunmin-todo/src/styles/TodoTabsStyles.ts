import styled from "styled-components";

const TabWrapper = styled.div<{isActive: boolean}>`
  display: flex;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
  font-size: 16px;
  color: ${({isActive}) => isActive ? '#27C8EC' : '#BDBDBD'};
  font-weight: ${({isActive}) => isActive ? 'bold' : 'normal'};
  position: relative;

  &:after {
    content:"";
    display: block;
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ isActive }) => (isActive ? "#27C8EC" : "transparent")};
  }

`;

export default TabWrapper;
