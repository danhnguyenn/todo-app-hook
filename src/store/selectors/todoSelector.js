import { createSelector } from 'reselect';
import { FilterTypes } from '../reducers/todoReducer';

const selectTodo = (state) => state.todos;

const selectTodos = createSelector(selectTodo, (todo) => todo.todos);

const selectFilter = createSelector(selectTodo, (todo) => todo.filter);

const selectTodosFiltered = createSelector(
	selectTodos,
	selectFilter,
	(todos, filter) => {
		switch (filter) {
			case FilterTypes.Active:
				return todos.filter((todo) => !todo.isCompleted);
			case FilterTypes.Completed:
				return todos.filter((todo) => todo.isCompleted);
			default:
				return todos;
		}
	}
);

const selectTodoUpdate = createSelector(selectTodo, (todo) => todo.todoUpdate);

const todoSelector = {
	selectFilter,
	selectTodosFiltered,
	selectTodoUpdate
};

export default todoSelector;
