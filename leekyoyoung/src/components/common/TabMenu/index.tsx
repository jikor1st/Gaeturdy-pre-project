import styled, {css} from "styled-components";

function TabMenu() {
    return (
        <TabWrapper>
            <TabList>
                <TabListItem className="active">
                    <a href="#">전체<span> 99+</span></a>
                </TabListItem>
                <TabListItem>
                    <a href="#">할 일<span> 11</span></a>
                </TabListItem>
                <TabListItem>
                    <a href="#">완료<span> 1</span></a>
                </TabListItem>
            </TabList>
        </TabWrapper>
    );
}

export default TabMenu;


export const TabWrapper = styled.div `
    padding: 23px 0;
    border-bottom: 1px solid ${props => props.theme.colors.Gray200};
`

export const TabList = styled.ul `
`
export const TabListItem = styled.li `
    display: inline-block;

    a { 
        box-sizing: border-box;
        color: ${props => props.theme.colors.Gray400};
        padding-bottom: 5px;
        box-sizing: border-box;
        font-size:  ${props => props.theme.Body2.FontSize};
        font-weight: ${props => props.theme.Body2.FontWeight};
        line-height: ${props => props.theme.Body2.LineHight};
    }

    &.active {
        a {
            color: ${props => props.theme.colors.Primary};
            border-bottom: 2px solid ${props => props.theme.colors.Primary};
        }
    }

    &+li {
        margin-left: 24px;
    }
`