import React, { useEffect, useState, useRef } from 'react';
import {
	HomepageContent,
	HomepageTitle,
	MainTodo,
	Loading,
	TodoList,
} from './Homepage.styles';
import { AddTodo, TodoItem, ModuleTodo, Spinner } from '../../components';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { loadDB } from '../../actions';

function Homepage() {
	const [listTodo, setListTodo] = useState([]);
	const [countSuccess, setCountSuccess] = useState(0);
	const [clearSuccess, setClearSuccess] = useState(false);
	const inputRef = useRef(null);
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	const { isLoading } = useSelector((state) => state.loading);

	const handleChangeView = (action) => {
		setListTodo(action);
	};

	useEffect(() => {
		dispatch(loadDB());

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
				{isLoading && (
					<Loading>
						<Spinner />
					</Loading>
				)}
				<AddTodo inputRef={inputRef} />
				<TodoList>
					{_.map(listTodo, (item, index) => {
						return <TodoItem key={index} todo={item} id={item._id} />;
					})}
				</TodoList>
				<ModuleTodo
					callback={handleChangeView}
					count={countSuccess}
					clear={clearSuccess}
				/>
			</MainTodo>
		</HomepageContent>
	);
}

export default Homepage;
