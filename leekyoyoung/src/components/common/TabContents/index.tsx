import styled, {css} from "styled-components";
import checkboxSVG from '@icon/tab-checkbox.svg';
import delSVG from '@icon/tab-delete.svg';
import React, { useEffect, useState } from 'react';
import { ListItem } from "@/type/todolisttype";
import localStorageController from '@/module/localstorage'

interface MyProps {
    placeholder: string;
    btntxt : string;
}


const TabContents = (props:MyProps) => {
    // const [변수명, 함수 ] = useState<type>(); 
    // 변수의 값을 업데이트 하기 위해선 함수가 호출 되어야 함.

    const [inputValue, setInputValue] = useState<string>(""); // 문자열 inputValue를 초기값 설정 
    // const [listItems, setListItems] = useState<ListItem[]>([]); 
    // 배열 listItems 초기값 설정\
    const [listItems, setListItems] = useState<ListItem[]>(() => {
        if (typeof window !== "undefined") {
            const saved: ListItem[] | null = localStorageController.getItem('todolist');
            if (saved !== null) {
                return saved;
            } else {
                return []; // ListItem[] 타입으로 반환합니다.
            }
        } else {
          return []; // ListItem[] 타입으로 반환합니다.
        }
    });

    // const [nextId, setNextId] = useState<number>(1); // 넘버 nextId 초기값 설정
    const [nextId, setNextId] = useState<number>(() => {
        const maxId = Math.max(...listItems.map((item) => item.id));
        return maxId > 0 ? maxId + 1 : 1;
    });

    const [checked] = useState<boolean>(false);

    /*
        *input 값이 변경될 때마다 호출되는 함수
        *event: React.ChangeEvent<HTMLInputElement>
        *event: any 타입도 가능 하나 남용하면 타입스크립트의 장점인 안정성과 가독성을 상실함
        *리엑트에서 input의 요소값이 변경될 때 발생하는 이벤트를 다루는 타입으로  event.target.value 속성 을 가지고 있다
    */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };



    // 폼 제출 시 호출되는 함수
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 폼 제출 기본 동작 막기

        const newItem: ListItem = { id: nextId, text: inputValue, checked : checked };
        // newItem.text가 빈 문자열인 경우 추가하지 않음
        // trim()은 공백을 제거한 값을 반환
        if (!newItem.text.trim()) {
            return;
        }
        setListItems([...listItems, newItem]); // 새로운 li 엘리먼트 추가
        // listItem의 배열의 상태로 업데이트 함

        setInputValue(""); // input 값 초기화
        setNextId(nextId + 1); // 다음 id 값 업데이트
        // TodoItem 의 key 값이 1씩 올라 감 *고유번호
    };

    // li 삭제 버튼 클릭 시 호출되는 함수
    const handleDeleteButtonClick = (id: number) => {
        const updatedListItems = listItems.filter(item => item.id !== id);
        // listItems에서 id와 일치하는 아이템을 제외한 새로운 배열을 생성
        // item.id !== id 조건을 만족하는 요소만 남겨둠
        setListItems(updatedListItems);
        // listItem의 배열 상태를 undatedListItems 배열로 업데이트 함
        localStorageController.removeItem("todolist")
    };

    const onChageChecked = (e:any) => {
        const id = Number(e.target.value);
        setListItems(
            listItems.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    }


    useEffect(() => {
        if (listItems?.length === 0) {
            return;
        } 
        localStorageController.setItem("todolist",listItems);
        setListItems(listItems)
    }, [listItems]);

    return (
        <Container>
            <InputWrapper onSubmit={handleFormSubmit} 
            // onSubmit 은 form요소의 이벤트 핸들러 함수를 등록하는 것을 의미함
            // form 요소에서 이벤트가 발생하면 기본적으로 페이지가 다시 로드 되는데 
            // 이를 방지하고자 함수를 등록시킴
            >
                <TodoField 
                    type="text" 
                    placeholder= {props.placeholder}
                    value={inputValue} // 변한 값을 저장함
                    onChange={handleInputChange} // 사용자가 입력할 때 변하는 값을 받음
                />
                <AddButton type="submit">{props.btntxt}</AddButton>
            </InputWrapper>
            <ContentsWrapper id="todolistwrapper">
                {listItems.map((item: ListItem) => (
                    <TodoItem  key={item.id}>
                        <label>
                            <input type="checkbox"
                                onChange={onChageChecked}
                                checked={item.checked}
                                value={item.id}
                            />
                            <span>
                                {item.text}
                            </span>
                        </label>
                        <DelButton onClick={() => handleDeleteButtonClick(item.id)}>삭제</DelButton>
                    </TodoItem>
                ))}
            </ContentsWrapper>
        </Container>
    );
}


export default TabContents;

export const Container = styled.div `
    padding-top: 28px;
`
export const InputWrapper = styled.form `
    display: flex;
    height: 44px;
`
export const Label = styled.label `
    width: 100%;
    height: 100%;
`

export const TodoField = styled.input `
    display: inline-block;
    width: calc( 100% - 79px);
    height: 100%;
    padding: 12px 16px;
    font-family: 'Pretendard';
    font-size: ${props =>props.theme.Body1.FontSize};
    font-weight: ${props =>props.theme.Body1.FontWeight};
    border: 1px solid ${props=> props.theme.colors.Gray200};
    border-radius: ${props=> props.theme.Radius.BRadius};
    &::placeholder {
        color: ${props => props.theme.colors.Gray400};
        font-size: 16px;
    }
`


export const AddButton = styled.button `
    display: inline-block;
    margin-left: 20px;
    width: 59px;
    height: 100%;
    color: ${props => props.theme.colors.white};
    font-size:  ${props => props.theme.Button1.FontSize};
    font-weight: ${props => props.theme.Button1.FontWeight};
    line-height: ${props => props.theme.Button1.LineHight};
    background-color: ${props=>props.theme.colors.Primary};
    border: none;
    border-radius: ${props=> props.theme.Radius.BRadius};
    cursor: pointer;
`
export const DelButton = styled.button`
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    background-image: url(${delSVG});
    background-repeat: no-repeat;
    background-size: 24px, 24px;
    background-position: center center;
    border: none;
    outline: none;
    background-color: transparent;
    text-indent: -9999px;
    overflow: hidden;
    width:30px;
    height: 30px;
    cursor: pointer;
`

export const ContentsWrapper = styled.ul ` 
    margin-top: 34px;

    `
export const TodoItem = styled.li` 
    position: relative;
    margin-bottom: 21px;

    label {
        position: relative;
        display: block;

        input[type="checkbox"] {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(0, 0);
            margin: 0;
            width: 30px;
            height: 30px;
            opacity: 0;

            &:checked {
                &+span {
                    color: ${props => props.theme.colors.Gray400};

                    &::before {
                        background-image: url(${checkboxSVG});
                        background-position: -6px -6px;
                        background-repeat: no-repeat;
                        border-color: ${props=>props.theme.colors.Primary};
                    }
                }
            }

            & + span {
                position: relative;
                display: inline-block;
                padding-left: 44px;
                line-height: 30px;
                color: ${props=>props.theme.colors.Gray800};
                font-size: ${props=>props.theme.Body1.FontSize};
                font-weight: ${props=>props.theme.Body1.FontWeight};
                cursor: pointer;
                width: calc( 100% - 54px);
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    border: 3px solid ${props => props.theme.colors.Gray200};
                    border-radius: 50%;
                    overflow: hidden;
                    box-sizing: border-box;
                }
            }
        }
    }


    &:last-of-type{
        margin-bottom: 0;
    }

    &:hover {
        ${DelButton} {
            display: block;
        }
    }

`