import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todoAction from '../../store/actions/todoAction';
import { FilterTypes } from '../../store/reducers/todoReducer';
import todoSelector from '../../store/selectors/todoSelector';

function TodoFilter(props) {
	const dispatch = useDispatch();
	const filter = useSelector(todoSelector.selectFilter);
	const filteredTodo = useSelector(todoSelector.selectTodosFiltered);

	const handleFilterChange = (filter) => {
		dispatch(todoAction.setFilter(filter));
	};
	return (
		<div className="todo-filter-container">
			<div className="todo-filter-count">
				{filteredTodo.length <= 1
					? `${filteredTodo.length} item `
					: `${filteredTodo.length} items `}
				left
			</div>
			<div className="todo-filter-status">
				<span
					className={clsx({ active: filter === FilterTypes.All })}
					onClick={() => handleFilterChange(FilterTypes.All)}
				>
					All
				</span>
				<span
					className={clsx({ active: filter === FilterTypes.Active })}
					onClick={() => handleFilterChange(FilterTypes.Active)}
				>
					Active
				</span>
				<span
					className={clsx({ active: filter === FilterTypes.Completed })}
					onClick={() => handleFilterChange(FilterTypes.Completed)}
				>
					Completed
				</span>
			</div>
		</div>
	);
}

export default TodoFilter;
