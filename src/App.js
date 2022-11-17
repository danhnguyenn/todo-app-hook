import React, { Component, useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoFilter from './components/TodoFilter/TodoFilter';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
function App(props) {
	return (
		<>
			<Header />
			<div className="todo-container-wrapper">
				<div className="todo-container">
					<TodoForm />
					<TodoFilter />
					<TodoList />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
