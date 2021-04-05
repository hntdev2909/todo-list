import React, { useEffect, useState, useRef } from 'react';
import { HomepageContent, HomepageTitle, MainTodo } from './Homepage.styles';
import { AddTodo, TodoItem, ModuleTodo } from '../../components';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from '../../actions';
import { API } from '../../api/tasksAPI';

function Homepage() {
	const [listTodo, setListTodo] = useState([]);
	const [countSuccess, setCountSuccess] = useState(0);
	const [clearSuccess, setClearSuccess] = useState(false);
	const inputRef = useRef(null);
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	const handleChangeView = (action) => {
		setListTodo(action);
	};

	useEffect(() => {
		API.callListTask()
			.then((res) => dispatch(loadData(res.data)))
			.catch((err) => err);

		inputRef.current.focus();
	}, []);

	useEffect(() => {
		let countSuccess = todos.length;
		let minSuccess = false;
		_.forEach(todos, (todo) => {
			if (todo.isCompleted) {
				countSuccess -= 1;
			}
		});

		_.some(todos, (item) => {
			if (item.isCompleted) {
				return (minSuccess = true);
			}
		});

		setClearSuccess(minSuccess);
		setCountSuccess(countSuccess);
		setListTodo(todos);
	}, [todos]);

	return (
		<HomepageContent>
			<HomepageTitle>todos</HomepageTitle>

			<MainTodo>
				<AddTodo inputRef={inputRef} />
				{_.map(listTodo, (item, index) => {
					return <TodoItem key={index} todo={item} id={item._id} />;
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
