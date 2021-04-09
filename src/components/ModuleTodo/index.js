import React, { useState } from 'react';
import {
	ModuleTodoContent,
	ModuleTodoText,
	ModuleTodoList,
	ModuleTodoItem,
} from './ModuleTodo.styles';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
	loadData,
	clearTaskCompleted,
	callingServer,
	calledServer,
} from '../../actions';
import { API } from '../../api/tasksAPI';

function ModuleTodo({ count, clear, callback }) {
	const [borderActive, setBorderActive] = useState('all');
	const tasks = useSelector((state) => state.todos);

	const dispatch = useDispatch();

	const handleView = (action) => {
		if (borderActive === action) {
			return;
		} else {
			dispatch(callingServer());
			API.filtersType(action)
				.then((res) => {
					dispatch(loadData(res.data));
					dispatch(calledServer());
					setBorderActive(action);
				})
				.catch(() => console.log('FAIL'));
		}
	};

	const handleClearAll = () => {
		dispatch(callingServer());
		API.deleteAll()
			.then(() => {
				dispatch(clearTaskCompleted());
				dispatch(calledServer());
			})
			.catch(() => console.log('Delete fail'));
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
					<ModuleTodoText onClick={() => handleClearAll()}>
						Clear complete
					</ModuleTodoText>
				</ModuleTodoItem>
			</ModuleTodoList>
		</ModuleTodoContent>
	);
}

export default ModuleTodo;
