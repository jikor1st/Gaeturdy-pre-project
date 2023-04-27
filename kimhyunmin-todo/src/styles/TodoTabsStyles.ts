import styled, {css} from "styled-components";

const TabWrapper = styled.div<{isActive: boolean}>`
  display: flex;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  ${({isActive})=>css`
      color:${isActive ? '#27C8EC' : '#BDBDBD'};
      font-weight:${isActive ? 'bold' : 'normal'};
   `}

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
