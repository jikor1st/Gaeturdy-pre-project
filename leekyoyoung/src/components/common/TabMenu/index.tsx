import styled, {css} from "styled-components";

function TabMenu() {
    return (
        <TabWrapper>
            <TabList>
                <TabListItem className="active">
                    <button>전체<span> 99+</span></button>
                </TabListItem>
                <TabListItem>
                    <button>할 일<span> 11</span></button>
                </TabListItem>
                <TabListItem>
                    <button>완료<span> 1</span></button>
                </TabListItem>
            </TabList>
        </TabWrapper>
    );
}

export default TabMenu;


export const TabWrapper = styled.div `
    padding: 42px 0 24px;
`

export const TabList = styled.ul `
`
export const TabListItem = styled.li `
    display: inline-block;

    button { 
        padding-bottom: 6px;
        ${({theme})=>css`
            color: ${theme.colors.Gray400};
            font-size:  ${theme.Body1.FontSize};
            line-height: ${theme.Body1.LineHight};
            font-weight: ${theme.Body1.FontWeight};
        `}
    }

    &.active {
        button {
            ${({theme})=> css`
                color: ${theme.colors.Primary};
                border-bottom: 2px solid ${theme.colors.Primary};
            `}
            font-weight: 600;
        }
    }

    &+li {
        margin-left: 15px;
    }
`