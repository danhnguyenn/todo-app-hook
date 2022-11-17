import axiosClient from './axiosClient';

const url = 'todo';

const todoService = {
	getTodos: () => axiosClient.get(url),
	addTodo: (data) => axiosClient.post(url, data),
	deleteTodo: (id) => axiosClient.delete(`${url}/${id}`),
	updateStatusTodo: (id, data) => axiosClient.put(`${url}/${id}`, data),
	updateTodo: (id, data) => axiosClient.put(`${url}/${id}`, data)
};

export default todoService;
