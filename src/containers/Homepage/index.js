import React, { useEffect, useState, useRef } from 'react';
import {
	HomepageContent,
	HomepageTitle,
	MainTodo,
	Loading,
} from './Homepage.styles';
import { AddTodo, TodoItem, ModuleTodo, Spinner } from '../../components';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from '../../actions';
import { API } from '../../api/tasksAPI';

function Homepage() {
	const [listTodo, setListTodo] = useState([]);
	const [countSuccess, setCountSuccess] = useState(0);
	const [clearSuccess, setClearSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const inputRef = useRef(null);
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	const handleChangeView = (action) => {
		setListTodo(action);
	};

	useEffect(() => {
		setIsLoading(true);
		API.callListTask()
			.then((res) => {
				dispatch(loadData(res.data));
				setIsLoading(false);
			})
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
			{isLoading && (
				<Loading>
					<Spinner />
				</Loading>
			)}

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
