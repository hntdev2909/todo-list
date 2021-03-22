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
		const tmpListTodo = [...mainListTodo];
		const valOfIndex = tmpListTodo[index];
		tmpListTodo.splice(index, 1);
		tmpListTodo.splice(index, 0, {
			name: valOfIndex.name,
			isFinished: !valOfIndex.isFinished,
		});
		setMainListTodo(tmpListTodo);
	};

	const handleDelete = (index) => {
		const tmpListTodo = [...mainListTodo];
		tmpListTodo.splice(index, 1);
		setMainListTodo(tmpListTodo);
	};

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
			setClearSuccess(false);
		}

		if (action === 'completed') {
			_.forEach(tmpListTodo, (todo) => {
				if (todo.isFinished) {
					newList.push(todo);
				}
			});
			setListTodo(newList);

			setClearSuccess(true);
		}
	};

	const handleSelectAll = (type) => {
		const tmpListTodo = [...mainListTodo];
		console.log(type);
		if (type) {
			_.map(tmpListTodo, (item) => {
				return (item.isFinished = true);
			});
		} else {
			_.map(tmpListTodo, (item) => {
				return (item.isFinished = false);
			});
		}
		setMainListTodo(tmpListTodo);
	};

	useEffect(() => {
		const tmpListTodo = [...mainListTodo];
		if (newTodo) {
			tmpListTodo.push({
				name: newTodo,
				isFinished: false,
			});
		}
		setMainListTodo(tmpListTodo);
	}, [newTodo]);

	useEffect(() => {
		let countSuccess = mainListTodo.length;
		let minSuccess = false;
		_.forEach(mainListTodo, (todo) => {
			if (todo.isFinished) {
				countSuccess -= 1;
			}
		});

		_.every(mainListTodo, (item) => {
			if (item.isFinished) {
				return (minSuccess = true);
			}
		});

		setClearSuccess(minSuccess);
		setCountSuccess(countSuccess);

		setListTodo(mainListTodo);
	}, [mainListTodo]);

	return (
		<HomepageContent>
			<HomepageTitle>todos</HomepageTitle>

			<MainTodo>
				<AddTodo
					callback={handleAddNewToDo}
					callbackSelectAll={handleSelectAll}
					length={mainListTodo.length}
				/>
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
				{mainListTodo.length > 0 && (
					<ModuleTodo
						count={countSuccess}
						clear={clearSuccess}
						callback={handleClearSuccess}
						callbackView={handleView}
					/>
				)}
			</MainTodo>
		</HomepageContent>
	);
}

export default Homepage;
