import React, { useEffect, useState } from 'react';
import { ListItem } from "@/type/todolisttype";
import localStorageController from '@/module/localstorage';
import * as t from "@/components/common//TabContents/style";
import uuid from 'react-uuid'

interface MyProps {
    placeholder: string;
    btntxt : string;
}


const TabContents = (props:MyProps) => {
    // const [변수명, 함수 ] = useState<type>(); 
    // 변수의 값을 업데이트 하기 위해선 함수가 호출 되어야 함.

    const [inputValue, setInputValue] = useState<string>(""); // 문자열 inputValue를 초기값 설정 
    const [inputDate, setInputDate] = useState<string>("");
    // const [listItems, setListItems] = useState<ListItem[]>([]); 
    // 배열 listItems 초기값 설정\
    const [listItems, setListItems] = useState<ListItem[]>(() => {
        const saved: ListItem[] | null = localStorageController.getItem('todolist');
        if (saved !== null) {
            return saved;
        } else {
            return []; // ListItem[] 타입으로 반환합니다.
        }
    
    });

    // const [nextId, setNextId] = useState<number>(1); // 넘버 nextId 초기값 설정
    // const [nextId, setNextId] = useState<number>(() => {
    //     const maxId = Math.max(...listItems.map((item) => item.id));
    //     return maxId > 0 ? maxId + 1 : 1;
    // });

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

    const handleClick = () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
        });

        setInputDate(formattedDate);
    };

    // 폼 제출 시 호출되는 함수
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 폼 제출 기본 동작 막기
        const newItem: ListItem = { id: uuid(), text: inputValue, checked : checked, inputDate: inputDate};
        // newItem.text가 빈 문자열인 경우 추가하지 않음
        // trim()은 공백을 제거한 값을 반환
        if (!newItem.text.trim()) {
            return;
        }
        setListItems([...listItems, newItem]); // 새로운 li 엘리먼트 추가
        // listItem의 배열의 상태로 업데이트 함


        setInputValue(""); // input 값 초기화
        // setNextId(nextId + 1);
         // 다음 id 값 업데이트
        // TodoItem 의 key 값이 1씩 올라 감 *고유번호
    };

    // li 삭제 버튼 클릭 시 호출되는 함수
    const handleDeleteButtonClick = (id: string) => {
        const updatedListItems = listItems.filter(item => item.id !== id);
        // listItems에서 id와 일치하는 아이템을 제외한 새로운 배열을 생성
        // item.id !== id 조건을 만족하는 요소만 남겨둠
        setListItems(updatedListItems);
        // listItem의 배열 상태를 undatedListItems 배열로 업데이트 함
    };

    const onChageChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = String(e.target.value);
        setListItems(
            listItems.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    }


    useEffect(() => {
        localStorageController.setItem("todolist",listItems);
        setListItems(listItems)
    }, [listItems]);

    return (
        <t.Container>
            <t.InputWrapper onSubmit={handleFormSubmit} 
            // onSubmit 은 form요소의 이벤트 핸들러 함수를 등록하는 것을 의미함
            // form 요소에서 이벤트가 발생하면 기본적으로 페이지가 다시 로드 되는데 
            // 이를 방지하고자 함수를 등록시킴
            >
                <t.TextField 
                    type="text" 
                    placeholder= {props.placeholder}
                    value={inputValue} // 변한 값을 저장함
                    onChange={handleInputChange} // 사용자가 입력할 때 변하는 값을 받음
                    onClick={handleClick}
                />
                <t.AddButton type="submit">{props.btntxt}</t.AddButton>
            </t.InputWrapper>
            <t.ContentsWrapper id="todolistwrapper">
                {listItems.map((item: ListItem) => (
                    <t.TodoItem  key={uuid()}>
                        <label>
                            <input type="checkbox"
                                onChange={onChageChecked}
                                checked={item.checked}
                                value={item.id}
                            />
                            <span>
                                {item.text}
                                <em>{item.inputDate}</em>
                            </span>
                            <t.EditButton>수정</t.EditButton>
                            <t.DelButton onClick={() => handleDeleteButtonClick(item.id)}>삭제</t.DelButton>
                        </label>
                    </t.TodoItem>
                ))}
            </t.ContentsWrapper>
        </t.Container>
    );
}


export default TabContents;
