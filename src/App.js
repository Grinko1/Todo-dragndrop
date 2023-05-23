import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Button from './components/button';
import Form from './components/form';
import Header from './components/header';
import Modal from './components/popup';
import TodoList from './components/todo-list';
import TodosDashboard from './components/todos-dashboard';

function App() {
  const {error, upcomingList, deletedList, completedList } = useSelector((state) => state.todos);
  const [isOpenModal, setIsOpenModal] = useState(false)


  return (
    <div className='App'>
      <Header />
      {error && <h2>{error}</h2>}
      <div className='app-addbtn'>
        <Button onClick={() => setIsOpenModal(true)}>Add new todo</Button>
      </div>

      <Modal isActive={isOpenModal} setIsActive={setIsOpenModal}>
        <Form setIsActive={setIsOpenModal} />
      </Modal>
      <TodosDashboard>
        <TodoList list={upcomingList} header='Upcoming todos' />
        <TodoList list={completedList} header='Completed todos' />
        <TodoList list={deletedList} header='Deleted todos' />
      </TodosDashboard>
    </div>
  );
}

export default App;
