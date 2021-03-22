import styled from 'styled-components';

const AddTodoImg = styled.img`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
`;

const AddTodoButton = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 40px;
	height: 100%;
	padding: 0 10px;
	opacity: ${(props) => props.opacity};
	visibility: ${(props) => props.visible};
`;

const AddTodoInput = styled.input`
	font-size: 1.6rem;
	box-sizing: border-box;
	flex: 1;
	border: none;
	outline: none;
	font-placeholder: italic;
`;

const AddTodoContent = styled.div`
	width: 100%;
	height: 65px;
	border: 1px solid #ccc;
	display: flex;
	align-items: center;
	background-color: white;
	box-sizing: border-box;
`;

export { AddTodoImg, AddTodoContent, AddTodoInput, AddTodoButton };
