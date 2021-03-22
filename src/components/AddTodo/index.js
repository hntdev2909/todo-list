import React, { useState } from 'react';
import {
	AddTodoContent,
	AddTodoIcon,
	AddTodoInput,
	AddTodoButton,
	AddTodoImg,
} from './AddTodo.styles';

function AddTodo({ callback }) {
	const [valueInput, setValueInput] = useState('');

	const handleSubmitTodo = (e) => {
		if (e.keyCode === 13) {
			if (valueInput.trim()) {
				setValueInput('');
				callback(valueInput);
			} else {
				setValueInput('');
			}
		}
	};

	return (
		<AddTodoContent>
			<AddTodoButton>
				<AddTodoImg
					width="20px"
					height="20px"
					src="https://www.flaticon.com/svg/vstatic/svg/892/892498.svg?token=exp=1616388972~hmac=ebe7fb7c068c8449683ece4ed9cf7cf4"
				></AddTodoImg>
			</AddTodoButton>
			<AddTodoInput
				onKeyDown={(e) => handleSubmitTodo(e)}
				onChange={(e) => setValueInput(e.target.value)}
				placeholder="What needs to be done?"
				value={valueInput}
			></AddTodoInput>
		</AddTodoContent>
	);
}

export default AddTodo;
