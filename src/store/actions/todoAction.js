import todoService from '../../services/todoService';
import { FilterTypes } from '../reducers/todoReducer';

export const todoActionType = {
	SetFilter: 'todos/SetFilter',
	SetTodoUpdate: 'todos/setTodoUpdate',

	Fetch: 'todos/fetch',
	Create: 'todos/create',
	Update: 'todos/update',
	RemoveTodo: 'todos/delete'
};

const setTodoUpdate = (todo) => ({
	type: todoActionType.SetTodoUpdate,
	payload: todo
});

const setFilter = (filter) => ({
	type: todoActionType.SetFilter,
	payload: filter
});

const fetch = (todos) => ({
	type: todoActionType.Fetch,
	payload: todos
});

const fetchAsync = () => async (dispatch) => {
	const { todos } = await todoService.getTodos();
	dispatch(fetch(todos));
};

const create = (todo) => ({
	type: todoActionType.Create,
	payload: todo
});

const createAsync = (data) => async (dispatch) => {
	const { todo } = await todoService.addTodo(data);
	dispatch(create(todo));
};

const update = (todo) => ({
	type: todoActionType.Update,
	payload: todo
});

const updateAsync =
	({ id, ...data }) =>
	async (dispatch) => {
		const { todo } = await todoService.updateTodo(id, data);
		dispatch(update(todo));
	};

const removeTodo = (todo) => ({
	type: todoActionType.RemoveTodo,
	payload: todo
});

const removeAsync = (todo) => (dispatch) => {
	todoService.deleteTodo(todo.id);
	dispatch(removeTodo(todo));
};
const todoAction = {
	setFilter,
	setTodoUpdate,
	fetch,
	fetchAsync,
	create,
	createAsync,
	update,
	updateAsync,
	removeTodo,
	removeAsync
};
export default todoAction;
