import React, { useState } from 'react';
import {
	ModuleTodoContent,
	ModuleTodoText,
	ModuleTodoList,
	ModuleTodoItem,
} from './ModuleTodo.styles';

function ModuleTodo({ count, clear, callback, callbackView }) {
	const [borderActive, setBorderActive] = useState('all');

	const clearComplete = () => {
		callback('clear');
	};

	const handleView = (action) => {
		setBorderActive(action);
		callbackView(action);
	};

	return (
		<ModuleTodoContent>
			<ModuleTodoList>
				<ModuleTodoItem>
					<ModuleTodoText>{count || '0'} item left</ModuleTodoText>
				</ModuleTodoItem>

				<ModuleTodoItem>
					<ModuleTodoText
						margin="0 4px"
						padding="0 4px"
						border={borderActive === 'all' ? '#ccc' : ''}
						onClick={() => handleView('all')}
						hoverBorder={'1px solid #ddd'}
					>
						All
					</ModuleTodoText>
					<ModuleTodoText
						margin="0 4px"
						padding="0 4px"
						border={borderActive === 'active' ? '#ccc' : ''}
						onClick={() => handleView('active')}
						hoverBorder={'1px solid #ddd'}
					>
						Active
					</ModuleTodoText>
					<ModuleTodoText
						margin="0 4px"
						padding="0 4px"
						border={borderActive === 'completed' ? '#ccc' : ''}
						hoverBorder={'1px solid #ddd'}
						onClick={() => handleView('completed')}
					>
						Completed
					</ModuleTodoText>
				</ModuleTodoItem>
				<ModuleTodoItem visible={clear ? 'visible' : 'hidden'}>
					<ModuleTodoText onClick={clearComplete}>
						Clear complete
					</ModuleTodoText>
				</ModuleTodoItem>
			</ModuleTodoList>
		</ModuleTodoContent>
	);
}

export default ModuleTodo;
