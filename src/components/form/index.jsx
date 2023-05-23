import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import { formatDate } from '../../utills/utills';
import Button from '../button';
import './style.css';

const Form = ({ setIsActive }) => {
  const [values, setValues] = useState({ text: '', deadline: '' });

  const dispatch = useDispatch();
  const createNewHandle = () => {
    const data = {
      task: values.text,
      deadline: formatDate(new Date(values.deadline)),
    };
    dispatch(addTodo(data));
    setValues({
      text: '',
      deadline: '',
    });
    setIsActive(false);
  };

  return (
    <form className='form' onSubmit={(e) => e.preventDefault()}>
      <label>task</label>
      <input
        type='text'
        value={values.text}
        onChange={(e) => setValues({ ...values, text: e.target.value })}
      />

      <label>deadline</label>
      <input
        type='datetime-local'
        value={values.deadline}
        onChange={(e) => setValues({ ...values, deadline: e.target.value })}
      />
      <Button onClick={createNewHandle}>Create new task</Button>
    </form>
  );
};

export default Form;
