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
import { changeType, editTask, deleteTask } from '../../actions';
import { useDispatch } from 'react-redux';

function TodoItem({ todo, id }) {
	const [isEdit, setIsEdit] = useState(false);
	const [editValue, setEditValue] = useState('');

	const dispatch = useDispatch();

	const handleCompleted = (id) => {
		dispatch(changeType(id, { isCompleted: !todo.isCompleted }));
	};

	const handleEdit = (value) => {
		setEditValue(value);
		setIsEdit(!isEdit);
	};

	const handleSubmitEdit = (e) => {
		if (e.keyCode === 13) {
			if (editValue) {
				editValue.trim();
				dispatch(editTask(id, { content: editValue }));
				setIsEdit(!isEdit);
			}
		}
	};

	const handleDeleteTask = () => {
		dispatch(deleteTask(id));
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
