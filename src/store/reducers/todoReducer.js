import { todoActionType } from '../actions/todoAction';

export const FilterTypes = Object.freeze({
	All: 'FilterTypes/All',
	Completed: 'FilterTypes/Completed',
	Active: 'FilterTypes/Active'
});

const initialState = {
	todos: [],
	todoUpdate: null,
	filter: FilterTypes.All
};

export const todoReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case todoActionType.SetFilter: {
			const newState = { ...state };
			newState.filter = action.payload;
			return newState;
		}

		case todoActionType.SetTodoUpdate: {
			const newState = { ...state };
			newState.todoUpdate = action.payload;
			return newState;
		}

		case todoActionType.Fetch: {
			const newState = { ...state };
			newState.todos = action.payload;

			return newState;
		}

		case todoActionType.Create: {
			const newState = { ...state };
			newState.todos = [...newState.todos, action.payload];

			return newState;
		}

		case todoActionType.Update: {
			const newState = { ...state };
			newState.todos = newState.todos.map((todo) =>
				todo.id === action.payload.id ? action.payload : todo
			);

			return newState;
		}

		case todoActionType.RemoveTodo: {
			const newState = { ...state };
			newState.todos = newState.todos.filter(
				(todo) => todo.id !== action.payload.id
			);

			return newState;
		}

		default:
			return state;
	}
};
