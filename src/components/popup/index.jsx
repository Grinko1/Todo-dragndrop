import './style.css';
import Button from '../button';

const Modal = ({ isActive = false, setIsActive, children }) => {
  return (
    <div className={isActive ? 'Modal Modal-visible' : 'Modal'} onClick={() => setIsActive(false)}>
      <div className='Modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='Modal-content__header'>
            <h2>Add new todo</h2>
          <Button onClick={() => setIsActive(false)}>Закрыть</Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};



export default Modal;
