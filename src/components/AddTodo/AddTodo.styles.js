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

	&:hover {
		cursor: pointer;
	}
`;

const AddTodoLoading = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
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
	position: relative;
`;

export {
	AddTodoImg,
	AddTodoContent,
	AddTodoInput,
	AddTodoButton,
	AddTodoLoading,
};
