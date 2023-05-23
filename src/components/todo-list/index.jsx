import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { togleTodoComplete } from '../../store/todoSlice';
import TodoItem from '../todo-item';
import './style.css';

const TodoList = ({ list, header }) => {
  const dispatch = useDispatch()
  // const [currentBoard, setCurrentBoard] = useState()
  const [currentItem, setCurrentItem] = useState();

  const dragOverHandler = (e) => {
    e.preventDefault()
    if (e.target.className === 'todo') {
      e.target.style.boxShadow = '0 4px 3px gray';
    }
  };
  const dragLeaveHandler = (e) => {

    e.target.style.boxShadow = 'none';
    console.log('dragLeaveHandler');
  };
  const dragStartHandler = (e, item, list) => {

 console.log('dragStartHandler');
    setCurrentItem(item);
    console.log(currentItem, 'currentItem start');
  };
  const dragEndHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
     console.log('dragEndHandler');
    e.target.style.boxShadow = 'none';
  };
  const dropHandler = (e) => {
   e.preventDefault();
   e.stopPropagation();
    console.log('dropHandler');
    console.log(currentItem, 'currentItem drop');
    if(currentItem !== undefined){
 dispatch(togleTodoComplete(currentItem));
    }
    // setCurrentItem(undefined)
    
    // const currentIndex = currentBoard.indexOf(currentItem)
    // console.log(currentIndex);
  };

  // const dragOverHandler = (e) => {};
  const dropListHandler = (e) => {};
  return (
    <div className='list'>
      <h2>{header}</h2>
      <ul
        className='list-todo'
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropListHandler(e, list)}>
        {list.map((item) => (
          <TodoItem
            item={item}
            key={item.id}
            list={list}
            dragOverHandler={dragOverHandler}
            dragLeaveHandler={dragLeaveHandler}
            dragStartHandler={dragStartHandler}
            dragEndHandler={dragEndHandler}
            dropHandler={dropHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
