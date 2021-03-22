import React, { useEffect, useState } from 'react';
import { HomepageContent, HomepageTitle, MainTodo } from './Homepage.styles';
import { AddTodo, TodoItem, ModuleTodo } from '../../components';
import _ from 'lodash';

function Homepage() {
	const [newTodo, setNewTodo] = useState('');
	const [listTodo, setListTodo] = useState([]);
	const [countSuccess, setCountSuccess] = useState(0);
	const [clearSuccess, setClearSuccess] = useState(false);
	const [mainListTodo, setMainListTodo] = useState([]);

	const handleAddNewToDo = (value) => {
		setNewTodo(value);
	};

	const handleSuccess = (index) => {
		const tmpListTodo = [...listTodo];
		const valOfIndex = tmpListTodo[index];
		tmpListTodo.splice(index, 1);
		tmpListTodo.splice(index, 0, {
			name: valOfIndex.name,
			isFinished: !valOfIndex.isFinished,
		});
		setListTodo(tmpListTodo);
	};

	const handleDelete = (index) => {
		const tmpListTodo = [...listTodo];
		tmpListTodo.splice(index, 1);
		setListTodo(tmpListTodo);
	};

	const handleClearSuccess = () => {
		const tmpListTodo = [...listTodo];
		const newList = [];
		_.forEach(tmpListTodo, (todo, index) => {
			if (!todo.isFinished) {
				newList.push(todo);
			}
		});
		setListTodo(newList);
	};

	const handleView = (action) => {
		const tmpListTodo = [...mainListTodo];
		const newList = [];
		if (action === 'all') {
			setListTodo(tmpListTodo);
		}

		if (action === 'active') {
			_.forEach(tmpListTodo, (todo) => {
				if (!todo.isFinished) {
					newList.push(todo);
				}
			});
			setListTodo(newList);
		}

		if (action === 'completed') {
			_.forEach(tmpListTodo, (todo) => {
				if (todo.isFinished) {
					newList.push(todo);
				}
			});
			setListTodo(newList);
		}
	};

	useEffect(() => {
		const tmpListTodo = [...listTodo];
		if (newTodo) {
			tmpListTodo.push({
				name: newTodo,
				isFinished: false,
			});
		}
		setMainListTodo(tmpListTodo);
		setListTodo(tmpListTodo);
	}, [newTodo]);

	useEffect(() => {
		let countSuccess = listTodo.length;
		let minSuccess = false;
		_.forEach(listTodo, (todo) => {
			if (todo.isFinished) {
				countSuccess -= 1;
			}
		});

		_.every(listTodo, (item) => {
			if (item.isFinished) {
				return (minSuccess = true);
			}
		});

		setClearSuccess(minSuccess);
		setCountSuccess(countSuccess);
	}, [listTodo]);

	return (
		<HomepageContent>
			<HomepageTitle>todos</HomepageTitle>

			<MainTodo>
				<AddTodo callback={handleAddNewToDo} />
				{_.map(listTodo, (item, index) => {
					return (
						<TodoItem
							callbackSuccess={handleSuccess}
							callbackDelete={handleDelete}
							key={index}
							todo={item}
							index={index}
						/>
					);
				})}
				<ModuleTodo
					count={countSuccess}
					clear={clearSuccess}
					callback={handleClearSuccess}
					callbackView={handleView}
				/>
			</MainTodo>
		</HomepageContent>
	);
}

export default Homepage;
