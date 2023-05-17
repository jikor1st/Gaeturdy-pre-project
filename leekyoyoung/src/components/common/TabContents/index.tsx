import React, { useEffect, useState } from 'react';
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
    const [modalOpenId, setModalOpenId] = useState<string>("");
    const [editModalOpenId, setEditModalOpenId] = useState<string>("");
    const [checked] = useState<boolean>(false);
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

    const handleEditButtonClick = (id: string, editedValue: string) => {
        const updatedListItems = listItems.map((item) =>
            item.id === id ? { ...item, text: editedValue } : item
        );
        setListItems(updatedListItems);
    };


    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newItem: ListItem = { id: uuid(), text: inputValue, checked : checked, inputDate: inputDate};
        if (!newItem.text.trim()) {
            return;
        }
        setListItems([...listItems, newItem]);
        setInputValue("")
    };

    const handleDeleteButtonClick = (id: string) => {
        const updatedListItems = listItems.filter(item => item.id !== id);
        setListItems(updatedListItems);
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
                        </label>
                    </t.TodoItem>
                ))}
            </t.ContentsWrapper>
        </t.Container>
    );
}


export default TabContents;
