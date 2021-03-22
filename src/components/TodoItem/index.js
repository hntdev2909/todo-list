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

function TodoItem({
	todo,
	index,
	callbackSuccess,
	callbackDelete,
	callbackEdit,
}) {
	const [isEdit, setIsEdit] = useState(false);
	const [editValue, setEditValue] = useState('');

	const handleClickSuccess = (index) => {
		callbackSuccess(index);
	};

	const handleDeleteTodo = (index) => {
		callbackDelete(index);
	};

	const handleEdit = (value) => {
		setEditValue(value);
		setIsEdit(!isEdit);
	};

	const handleSubmitEdit = (e) => {
		if (e.keyCode === 13) {
			if (editValue.trim()) {
				callbackEdit(index, editValue);
				setIsEdit(!isEdit);
			}
		}
	};

	return (
		<TodoItemContent>
			<TodoIcon marginLeft="10px" onClick={() => handleClickSuccess(index)}>
				<TodoImg
					opacity="0.5"
					width="35px"
					height="35px"
					src={Icons.circleIcon.default}
				/>

				{todo.isFinished && (
					<TodoImg
						position="absolute"
						width="20px"
						height="20px"
						src={Icons.checkIcon.default}
					/>
				)}
			</TodoIcon>
			<TodoItemDiv onDoubleClick={() => handleEdit(todo.name)}>
				{isEdit ? (
					<TodoInput
						onKeyDown={(e) => handleSubmitEdit(e)}
						onChange={(e) => setEditValue(e.target.value)}
						value={editValue}
					/>
				) : (
					<TodoItemText
						color={todo.isFinished ? '#ccc' : '#000'}
						line={todo.isFinished ? 'line-through' : 'none'}
					>
						{todo.name}
					</TodoItemText>
				)}
			</TodoItemDiv>
			<DeleteIcon display="none" onClick={() => handleDeleteTodo(index)}>
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
