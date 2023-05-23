import { useDispatch } from 'react-redux';
import { removeTodo, togleTodoComplete } from '../../store/todoSlice';
import './style.css';

const TodoItem = ({
  item,
  list,
  dragOverHandler,
  dragLeaveHandler,
  dragStartHandler,
  dragEndHandler,
  dropHandler,
}) => {
  const dispatch = useDispatch();
  const deleteTask = () => {
    dispatch(removeTodo(item));
  };
  const doneTask = () => {
    dispatch(togleTodoComplete(item));
  };

  const mainClassName =
    (item.deleted && ' todo-deleted todo') || (item.completed && 'todo-completed todo') || 'todo';

  return (
    <li
      className={mainClassName}
      draggable={!item.deleted && true}
      onDragOver={(e) => dragOverHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragStart={(e) => dragStartHandler(e, item, list)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDrop={(e) => dropHandler(e, item, list)}>
      <input type='checkbox' className='todo-done' checked={item.completed} onChange={doneTask} />
      {item.task}
      <div className='todo-time'>
        <span>untill: {item.deadline}</span>
        {item.donetime ? <span>done: {item.donetime}</span> : ''}
      </div>
      {item.completed ? (
        <span className='todo-delete' onClick={deleteTask}>
          &times;
        </span>
      ) : (
        ''
      )}
    </li>
  );
};

export default TodoItem;
