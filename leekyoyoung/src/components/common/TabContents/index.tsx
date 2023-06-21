import React, { useEffect, useState, useRef } from 'react';
import { ListItem } from "@/type/todolisttype";
import localStorageController from '@/module/localstorage';
import * as t from "@/components/common//TabContents/style";
import uuid from 'react-uuid'
import DelModal from '@/components/common/DelModal';
import ModalPortal from '@/modal/ModalPortal';
import EditModal from '@/components/common/EditModal'

interface MyProps {
    placeholder: string;
    btntxt : string;
}


const TabContents = (props:MyProps) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [inputDate, setInputDate] = useState<string>("");
    const [isDown, setDown] = useState<boolean>(false);
    const [modalOpenId, setModalOpenId] = useState<string>("");
    const [editModalOpenId, setEditModalOpenId] = useState<string>("");
    const [checked] = useState<boolean>(false);
    const downPosX = useRef(0);
    const movePosX = useRef(0);
    const [listItems, setListItems] = useState<ListItem[]>(() => {
        const saved: ListItem[] | null = localStorageController.getItem('todolist');
        if (saved !== null) {
            return saved;
        } else {
            return [];
        }
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        // input에서 변경되는 내용을 setInputValue에 저장한다.
    };

    const handleClick = () => {
        const currentDate = new Date();
        // 새로운 날짜 데이터를 생성한다.
        const formattedDate = currentDate.toLocaleString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
        });

        setInputDate(formattedDate);
        // setInpuDate에 날짜를 저장한다.
    };

    const handleEditButtonClick = (id: string, editedValue: string) => {
        const updatedListItems = listItems.map((item) =>
        // map()을 사용하여 listItems를 순회하며 각 항목에 대한 콜백 함수를 실행한다
            item.id === id ? { ...item, text: editedValue } : item
            // item.id 와 id 값이 값을 떄 item 기존 항목은 유지하며 text의 값을 editedValue로 업데이트를 해준다
            // 일치하지 않은 경우 그대로 반환한다.
        );
        setListItems(updatedListItems);
        // setListItems에 반환된 항목을 저장한다.

    };


    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // 기본동작 막기
        const newItem: ListItem = { id: uuid(), text: inputValue, checked : checked, inputDate: inputDate};
        // listItem 타입의 newItem을 생성하여 에 id, text, checked, inputDate 값을 할당한다.
        if (!newItem.text.trim()) {
            // newItem.text에서 여백으로 작성이 되면 return 한다.
            return;
        }
        setListItems([...listItems, newItem]);
        // 기존 listItems 배열에 newItem을 추가해주고 setlistItems에 저장한다.
        setInputValue("")
        // setInputValue의 값을 초기화 한다.
    };

    const handleDeleteButtonClick = (id: string) => {
        const updatedListItems = listItems.filter(item => item.id !== id);
        // item을 확인하고, item.id가 주어진 id와 일치하지 않는지 확인한다.
        // item.id가 id와 일치하지 않으면 해당 항목은 유지고 결과 배열에 포함된다
        // item.id가 id와 일치하면 해당 항목은 결과 배열에서 제외한다.
        setListItems(updatedListItems);
        // 결과를 setListItems를 호출하여 업데이트한다.
    };
    

    const onChageChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = String(e.target.value);
        setListItems(
            listItems.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    }

    const handleDelModalShow = (id: string) => {
        setModalOpenId(id);
    };

    const handleEditModalShow = (id: string) => {
        setEditModalOpenId(id);
    };

    const handleDelModalHide = () => {
        setModalOpenId("");
    };


    const handleEditModalHide = () => {
        setEditModalOpenId("");
    };

    useEffect(() => {
        localStorageController.setItem("todolist",listItems);
        setListItems(listItems)
    }, [listItems]);

    return (
        <t.Container>
            <t.InputWrapper onSubmit={handleFormSubmit}>
                <t.TextField 
                    type="text" 
                    placeholder= {props.placeholder}
                    value={inputValue} 
                    onChange={handleInputChange}
                    onClick={handleClick}
                />
                <t.AddButton type="submit">{props.btntxt}</t.AddButton>
            </t.InputWrapper>
            <t.ContentsWrapper>
                {listItems.map((item) => (
                    <t.TodoItem key={item.id}>
                        <label
                            onPointerDown={(e)=> {
                                setDown(true); 
                                e.preventDefault();
                                downPosX.current = e.clientX - movePosX.current
                                const target = e.currentTarget;
                                target.style.transition = 'none';
                            }}
                            onPointerMove={(e)=> {
                                if(!isDown) {
                                    return;
                                }
                                const target = e.currentTarget;
                                movePosX.current = e.clientX - downPosX.current;
                                if(movePosX.current < -95){
                                    movePosX.current = -95;
                                } else if(movePosX.current > 0) {
                                    movePosX.current = 0;
                                }
                                target.style.transform  =`translateX(${movePosX.current}px)`
                            }}
                            onPointerUp={(e)=> {
                                const target = e.currentTarget;
                                setDown(false); 
                                if (movePosX.current < -48) { 
                                    movePosX.current = -96;
                                } else {
                                    movePosX.current = 0;
                                }
                                target.style.transition = 'ease-in .2s transform'
                                target.style.transform  =`translateX(${movePosX.current}px)`
                            }}
                        >
                            <input type="checkbox"
                                onChange={onChageChecked}
                                checked={item.checked}
                                value={item.id}
                                onClick={(e)=> {
                                    e.stopPropagation();
                                    return;
                                }}
                            />
                            <span>
                                {item.text}
                                <em>{item.inputDate}</em>
                            </span>
                        </label>
                        <t.EditButton onClick={() => handleEditModalShow(item.id)}>수정</t.EditButton>
                        {editModalOpenId === item.id && (
                            <ModalPortal key={item.id}>
                                <EditModal
                                    value={item.text}
                                    onClose={handleEditModalHide}
                                    onEdit={(editedValue:any) => handleEditButtonClick(item.id, editedValue)}
                                />
                            </ModalPortal>
                        )}

                        <t.DelButton onClick={() => handleDelModalShow(item.id)}>삭제</t.DelButton>
                        {modalOpenId === item.id && (
                            <ModalPortal key={item.id}>
                                <DelModal
                                    onClose={handleDelModalHide}
                                    onDelete={() => handleDeleteButtonClick(item.id)}
                                />
                            </ModalPortal>
                        )}
                    </t.TodoItem>
                ))}
            </t.ContentsWrapper>
        </t.Container>
    );
}


export default TabContents;
