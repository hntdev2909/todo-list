import styled from 'styled-components';

const TodoItemText = styled.p`
	flex: 1;
	text-align: left;
	font-size: 20px;
	padding: 15px 15px 15px 20px;
	color: ${(props) => props.color};
	text-decoration: ${(props) => props.line};
`;

const TodoImg = styled.img`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	position: ${(props) => props.position};
`;

const TodoIcon = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: ${(props) => props.marginLeft};
`;

const DeleteIcon = styled(TodoIcon)`
	display: none;
`;

const TodoItemContent = styled.div`
	width: 100%;
	height: 58px;
	display: flex;
	align-items: center;
	background-color: white;
	border: 1px solid #ccc;
	box-sizing: border-box;

	&:hover ${DeleteIcon} {
		display: flex;
	}
`;

export { TodoItemText, DeleteIcon, TodoIcon, TodoImg, TodoItemContent };
