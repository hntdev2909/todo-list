import React, { useEffect, useState, useRef } from 'react';
import { HomepageContent, HomepageTitle, MainTodo } from './Homepage.styles';
import { AddTodo, TodoItem, ModuleTodo } from '../../components';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from '../../actions';

function Homepage() {
	const [newTodo, setNewTodo] = useState('');
	const [listTodo, setListTodo] = useState([]);
	const [countSuccess, setCountSuccess] = useState(0);
	const [clearSuccess, setClearSuccess] = useState(false);
	const [mainListTodo, setMainListTodo] = useState([]);
	const inputRef = useRef(null);
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	const handleClearSuccess = () => {
		const tmpListTodo = [...mainListTodo];
		const newList = [];
		_.forEach(tmpListTodo, (todo, index) => {
			if (!todo.isFinished) {
				newList.push(todo);
			}
		});
		setMainListTodo(newList);
	};

	const handleChangeView = (action) => {
		setListTodo(action);
	};

	useEffect(() => {
		const localStorage = window.localStorage;
		const dataLocal = localStorage.getItem('todos');
		if (dataLocal) {
			dispatch(loadData(JSON.parse(dataLocal)));
		}

		inputRef.current.focus();
	}, []);

	useEffect(() => {
		const localStorage = window.localStorage;
		let countSuccess = todos.length;
		let minSuccess = false;
		_.forEach(todos, (todo) => {
			if (todo.isCompleted) {
				countSuccess -= 1;
			}
		});

		_.every(todos, (item) => {
			if (item.isCompleted) {
				return (minSuccess = true);
			}
		});

		setClearSuccess(minSuccess);
		setCountSuccess(countSuccess);
		setListTodo(todos);
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<HomepageContent>
			<HomepageTitle>todos</HomepageTitle>

			<MainTodo>
				<AddTodo inputRef={inputRef} />
				{_.map(listTodo, (item, index) => {
					return <TodoItem key={index} todo={item} index={index} />;
				})}
				{todos.length > 0 && (
					<ModuleTodo
						callback={handleChangeView}
						count={countSuccess}
						clear={clearSuccess}
					/>
				)}
			</MainTodo>
		</HomepageContent>
	);
}

export default Homepage;
