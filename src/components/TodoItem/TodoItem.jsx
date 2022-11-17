import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import todoAction from '../../store/actions/todoAction';
const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	const handleSetTodoUpdate = () => {
		dispatch(todoAction.setTodoUpdate(todo));
	};

	const handleToggleTodo = () => {
		dispatch(
			todoAction.updateAsync({ ...todo, isCompleted: !todo.isCompleted })
		);
	};

	const handleDeleteTodo = () => {
		dispatch(todoAction.removeAsync(todo));
	};

	return (
		<>
			<div className="todo-item-container">
				<span className="todo-item-toggle">
					{todo.isCompleted ? (
						<img src="assets/complete-tick.svg" alt="tick" />
					) : (
						<img src="assets/active-tick.svg" alt="tick" />
					)}
				</span>
				<div
					className={clsx('todo-item-content', { completed: todo.isCompleted })}
					onClick={handleToggleTodo}
				>
					{todo.content}
				</div>
				<div className="todo-item-options">
					<span className="icon-btn">
						<img
							src="assets/edit.svg"
							alt="edit"
							onClick={handleSetTodoUpdate}
						/>
					</span>
					<span className="icon-btn" onClick={handleDeleteTodo}>
						<img src="assets/delete.svg" alt="close" />
					</span>
				</div>
			</div>
		</>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

export default TodoItem;
