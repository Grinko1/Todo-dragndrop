import { createSlice } from '@reduxjs/toolkit';
import { formatDate, generateCode } from '../utills/utills';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    upcomingList: [
      { id: generateCode(), task: 'fix header', deadline: '23.06, 17:00 ', completed: false },
      {
        id: generateCode(),
        task: 'make layout footer',
        deadline: '23.05, 12:00',
        completed: false,
      },
      {
        id: generateCode(),
        task: 'make gragndrop task ',
        deadline: '26.05, 18:00',
        completed: false,
      },
      { id: generateCode(), task: 'fix modal ', deadline: '29.05, 15:00', completed: false },
      { id: generateCode(), task: 'fix deleting', deadline: '27.05, 16:00', completed: false },
    ],
    completedList: [
      {
        id: generateCode(),
        task: 'make colorful borders ',
        deadline: '29.05, 15:00',
        completed: true,
        donetime: formatDate(new Date()),
      },
      {
        id: generateCode(),
        task: 'fix padding',
        deadline: '27.05, 16:00',
        completed: true,
        donetime: formatDate(new Date()),
      },
    ],
    deletedList: [
      {
        id: generateCode(),
        task: 'fix reducer',
        deadline: '23.06, 17:00 ',
        completed: true,
        donetime: '28.05, 09:00',
        deleted: true,
      },
    ],
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      console.log(action.payload);
      state.upcomingList.push({
        id: generateCode(),
        task: action.payload.task,
        deadline: action.payload.deadline,
        completed: false,
      });
    },
    removeTodo(state, action) {
      if (action.payload.completed && !action.payload.hasOwnProperty('deleted')) {
        state.completedList = state.completedList.filter((todo) => todo.id !== action.payload.id);
        state.deletedList.push({ ...action.payload, deleted: true });
        state.error = null;
      } else if (!action.payload.completed) {
        state.error = 'Firstly should done this task';
      } else {
        state.error = 'Already deleted';
      }
    },
    togleTodoComplete(state, action) {
      console.log(action.payload);
      if (!action.payload.hasOwnProperty('deleted')) {
        if (action.payload.completed === false) {
          const date = new Date();

          state.upcomingList = state.upcomingList.filter((todo) => todo.id !== action.payload.id);
          state.completedList.push({
            ...action.payload,
            completed: true,
            donetime: formatDate(date),
          });
        } else {
          state.completedList = state.completedList.filter((todo) => todo.id !== action.payload.id);
          state.upcomingList.push({ ...action.payload, completed: false, donetime: 0 });
        }
      }
    },
  },
});

export const { addTodo, removeTodo, togleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;
