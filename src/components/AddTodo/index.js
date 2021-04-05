import React, { useEffect, useState } from 'react';
import {
	AddTodoContent,
	AddTodoInput,
	AddTodoButton,
	AddTodoImg,
} from './AddTodo.styles';
import { useSelector, useDispatch } from 'react-redux';
import { Icons } from '../../themes';
import { addTodos, changeTypeAll } from '../../actions';
import { API } from '../../api/tasksAPI';

function AddTodo({ inputRef }) {
	const [valueInput, setValueInput] = useState('');
	const [isSelectAll, setIsSelectAll] = useState(false);

	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.todos);

	const handleSubmitTodo = (e) => {
		if (e.keyCode === 13) {
			if (valueInput.trim()) {
				setValueInput('');
				API.createNewTask(valueInput)
					.then((res) => dispatch(addTodos(res.data)))
					.catch((err) => console.log('Error', err));
			} else {
				setValueInput('');
			}
		}
	};

	const handleFinishAll = () => {
		dispatch(changeTypeAll(!isSelectAll));
		setIsSelectAll(!isSelectAll);
		API.editTypeAll({ isCompleted: !isSelectAll })
			.then(() => console.log('Change success'))
			.catch(() => console.log('Change fail'));
	};

	useEffect(() => {
		let checkAll = tasks.every((task) => task.isCompleted === true);
		if (checkAll) {
			setIsSelectAll(true);
		} else {
			setIsSelectAll(false);
		}
	}, [tasks]);

	return (
		<AddTodoContent>
			<AddTodoButton
				visible={tasks.length ? 'visible' : 'hidden'}
				opacity={isSelectAll ? '1' : '0.2'}
				onClick={handleFinishAll}
			>
				<AddTodoImg
					width="20px"
					height="20px"
					src={Icons.downArrowIcon.default}
				></AddTodoImg>
			</AddTodoButton>
			<AddTodoInput
				ref={inputRef}
				onKeyDown={(e) => handleSubmitTodo(e)}
				onChange={(e) => setValueInput(e.target.value)}
				placeholder="What needs to be done?"
				value={valueInput}
			></AddTodoInput>
		</AddTodoContent>
	);
}

export default AddTodo;
