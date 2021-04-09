import React, { useState } from 'react';
import {
	TodoItemText,
	TodoIcon,
	TodoItemContent,
	TodoImg,
	DeleteIcon,
	TodoInput,
	TodoItemDiv,
} from './TodoItem.styles';
import { Icons } from '../../themes';
import {
	callingServer,
	calledServer,
	changeType,
	deleteTask,
	editTask,
} from '../../actions';
import { useDispatch } from 'react-redux';
import { API } from '../../api/tasksAPI';

function TodoItem({ todo, id }) {
	const [isEdit, setIsEdit] = useState(false);
	const [editValue, setEditValue] = useState('');

	const dispatch = useDispatch();

	const handleCompleted = (id) => {
		dispatch(callingServer());
		API.editLisTask(id, { isCompleted: todo.isCompleted })
			.then(() => {
				dispatch(changeType(id));
				dispatch(calledServer());
			})
			.catch((err) => console.log('err', err));
	};

	const handleEdit = (value) => {
		setEditValue(value);
		setIsEdit(!isEdit);
	};

	const handleSubmitEdit = (e) => {
		if (e.keyCode === 13) {
			if (editValue.trim()) {
				dispatch(callingServer());
				API.editLisTask(id, { content: editValue })
					.then(() => {
						dispatch(editTask({ id, editValue }));
						setIsEdit(!isEdit);
						dispatch(calledServer());
					})
					.catch(() => console.log('Err'));
			}
		}
	};

	const handleDeleteTask = () => {
		dispatch(callingServer());
		API.deleteTask(id)
			.then(() => {
				dispatch(deleteTask(id));
				dispatch(calledServer());
			})
			.catch(() => console.log('Err'));
	};

	return (
		<TodoItemContent>
			<TodoIcon marginLeft="10px" onClick={() => handleCompleted(id)}>
				{todo.isCompleted ? (
					<TodoImg width="35px" height="35px" src={Icons.checkIcon.default} />
				) : (
					<TodoImg
						opacity="0.5"
						width="35px"
						height="35px"
						src={Icons.circleIcon.default}
					/>
				)}
			</TodoIcon>
			<TodoItemDiv onDoubleClick={() => handleEdit(todo.content)}>
				{isEdit ? (
					<TodoInput
						onKeyDown={(e) => handleSubmitEdit(e)}
						onChange={(e) => setEditValue(e.target.value)}
						value={editValue}
					/>
				) : (
					<TodoItemText
						color={todo.isCompleted ? '#ccc' : '#000'}
						line={todo.isCompleted ? 'line-through' : 'none'}
					>
						{todo.content}
					</TodoItemText>
				)}
			</TodoItemDiv>
			<DeleteIcon display="none" onClick={() => handleDeleteTask()}>
				<TodoImg
					width="15px"
					height="15px"
					src={Icons.cancelIcon.default}
				></TodoImg>
			</DeleteIcon>
		</TodoItemContent>
	);
}

export default TodoItem;
