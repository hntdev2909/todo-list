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
import { changeType, deleteTask, editTask } from '../../actions';
import { useDispatch } from 'react-redux';
import { API } from '../../api/tasksAPI';

function TodoItem({ todo, id }) {
	const [isEdit, setIsEdit] = useState(false);
	const [editValue, setEditValue] = useState('');

	const dispatch = useDispatch();

	const handleCompleted = (id) => {
		dispatch(changeType(id));
		API.editLisTask(id, { isCompleted: todo.isCompleted });
	};

	const handleEdit = (value) => {
		setEditValue(value);
		setIsEdit(!isEdit);
	};

	const handleSubmitEdit = (e) => {
		if (e.keyCode === 13) {
			if (editValue.trim()) {
				dispatch(editTask({ id, editValue }));
				setIsEdit(!isEdit);
				API.editLisTask(id, { content: editValue });
			}
		}
	};

	const handleDeleteTask = () => {
		console.log(id);
		dispatch(deleteTask(id));
		API.deleteTask(id);
	};

	return (
		<TodoItemContent>
			<TodoIcon marginLeft="10px" onClick={() => handleCompleted(id)}>
				<TodoImg
					opacity="0.5"
					width="35px"
					height="35px"
					src={Icons.circleIcon.default}
				/>

				{todo.isCompleted && (
					<TodoImg
						position="absolute"
						width="20px"
						height="20px"
						src={Icons.checkIcon.default}
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
