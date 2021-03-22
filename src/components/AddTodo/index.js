import React, { useState } from 'react';
import {
	AddTodoContent,
	AddTodoIcon,
	AddTodoInput,
	AddTodoButton,
	AddTodoImg,
} from './AddTodo.styles';

function AddTodo({ callback, callbackSelectAll }) {
	const [valueInput, setValueInput] = useState('');
	const [isSelectAll, setIsSelectAll] = useState(false);

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

	const handleFinishAll = () => {
		if (isSelectAll) {
			setIsSelectAll(false);
			callbackSelectAll(false);
		} else {
			setIsSelectAll(true);
			callbackSelectAll(true);
		}
	};

	return (
		<AddTodoContent>
			<AddTodoButton
				opacity={isSelectAll ? '1' : '0.2'}
				onClick={handleFinishAll}
			>
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
