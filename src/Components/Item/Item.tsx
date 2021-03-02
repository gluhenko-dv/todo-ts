import {useDispatch} from 'react-redux';
import {ITodo} from '../Todo/Todo';

export const Item = ({id, text, isCompleted}: ITodo) => {
  const dispatch = useDispatch();
  return (
    <div className={isCompleted ? `item item-completed` : `item`}>
      <input
        onClick={() => dispatch({type: 'COMPLETE_TASK', id: id})}
        className="custom-checkbox"
        type="checkbox"
        id={`item-${id}`}
        name={`item-${id}`}
        value={text}
        defaultChecked={isCompleted}
      />
      <label htmlFor={`item-${id}`}></label>
      <span className="item-text">{text}</span>
    </div>
  );
};
