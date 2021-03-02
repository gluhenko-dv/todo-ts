import React, {useState, useEffect, FunctionComponent} from 'react';
import {useSelector} from 'react-redux';
import {Modal} from '../Modal/Modal';
import {Title, ItemStyled, AddBtn, EditBtn} from '../styled';
import {Item} from '../Item/Item';
import {EditItem} from '../Item/editItem';

export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

interface IReduxAppState {
  tasks: ITodo;
}

export const ToDo: FunctionComponent = () => {
  const todoList:ITodo[] = useSelector<IReduxAppState, any>((state) => state.tasks);
  const [addModal, setAddModal] = useState<boolean>(false);
  const [type, setType] = useState<boolean>(true);

  const toggleModal = (): void => {
    setAddModal(!addModal);
  };

  useEffect(() => {
    if (!todoList.length) setType(true);
  }, [todoList.length]);

  return (
    <>
      <Title>Сегодня</Title>

      {todoList.length ? (
        <>
          <EditBtn onClick={() => setType(!type)}>{type ? `Править` : `Отмена`}</EditBtn>
          <div className="items-wrap">
            {todoList.map((item) => (type ? <Item {...item} key={item.id} /> : <EditItem {...item} key={item.id} />))}
          </div>
        </>
      ) : (
        <ItemStyled>Список задач пуст</ItemStyled>
      )}

      {type && <AddBtn onClick={toggleModal} />}
      {addModal && <Modal onClick={toggleModal} />}
    </>
  );
};
