import React, { Component, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todoAction from '../../store/actions/todoAction';
import todoSelector from '../../store/selectors/todoSelector';
import { useEffect, useRef } from 'react';

export const FormModules = {
	Create: 'todos/Create',
	Edit: 'todos/Edit'
};

const TodoForm = () => {
	const dispatch = useDispatch();
	const todoUpdate = useSelector(todoSelector.selectTodoUpdate);
	const [value, setValue] = useState('');
	const inputRef = useRef();
	
	const handleChangeValue = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoUpdate) {
			dispatch(todoAction.updateAsync({ ...todoUpdate, content: value }));
			dispatch(todoAction.setTodoUpdate(null));
		} else {
			dispatch(todoAction.createAsync({ content: value }));
		}
		setValue('');
	};

	useEffect(() => {
		if (todoUpdate) {
			setValue(todoUpdate.content);
			inputRef.current.focus();
		}
	}, [todoUpdate]);

	return (
		<div className="todo-form-container">
			<form onSubmit={handleSubmit}>
				<input
					ref={inputRef}
					type="text"
					placeholder="What need to be done?"
					value={value}
					onChange={handleChangeValue}
				/>
			</form>
		</div>
	);
};

export default TodoForm;
