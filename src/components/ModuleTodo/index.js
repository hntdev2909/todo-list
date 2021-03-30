import React, { useState } from 'react';
import {
	ModuleTodoContent,
	ModuleTodoText,
	ModuleTodoList,
	ModuleTodoItem,
} from './ModuleTodo.styles';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { clearTaskCompleted } from '../../actions';

function ModuleTodo({ count, clear, callback }) {
	const [borderActive, setBorderActive] = useState('all');
	const tasks = useSelector((state) => state.todos);

	const dispatch = useDispatch();

	const handleView = (action) => {
		setBorderActive(action);
		const tmpTasks = [...tasks];
		let newList = [];
		if (action === 'all') {
			newList = [...tmpTasks];
		}

		if (action === 'active') {
			_.forEach(tmpTasks, (todo) => {
				if (!todo.isCompleted) {
					newList.push(todo);
				}
			});
		}

		if (action === 'completed') {
			_.forEach(tmpTasks, (todo) => {
				if (todo.isCompleted) {
					newList.push(todo);
				}
			});
		}
		callback(newList);
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
					<ModuleTodoText onClick={() => dispatch(clearTaskCompleted())}>
						Clear complete
					</ModuleTodoText>
				</ModuleTodoItem>
			</ModuleTodoList>
		</ModuleTodoContent>
	);
}

export default ModuleTodo;
