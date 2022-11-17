import React, { useEffect } from 'react';
import todoSelector from '../../store/selectors/todoSelector';
import TodoItem from '../TodoItem/TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import todoAction from '../../store/actions/todoAction';
function TodoList(props) {
	const dispatch = useDispatch();
	const todosFiltered = useSelector(todoSelector.selectTodosFiltered);
	useEffect(() => {
		dispatch(todoAction.fetchAsync());
	}, [dispatch]);
	return (
		<div className="todo-list-container">
			{todosFiltered.map((todo, index) => {
				return <TodoItem key={todo.id} todo={todo} />;
			})}
		</div>
	);
}

export default TodoList;
