import styled from 'styled-components';

const TodoInput = styled.input`
	width: 100%;
	height: 56px;
	box-sizing: border-box;
	font-size: 20px;
	padding-left: 15px;
	outline: none;
`;

const TodoItemText = styled.p`
	text-align: left;
	font-size: 20px;
	padding: 15px 15px 15px 20px;
	margin: 0;
	color: ${(props) => props.color};
	text-decoration: ${(props) => props.line};
	box-sizing: border-box;
`;

const TodoItemDiv = styled.div`
	flex: 1;
	height: 100%;
	box-sizing: border-box;
`;

const TodoImg = styled.img`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	position: ${(props) => props.position};
	opacity: ${(props) => props.opacity};
`;

const TodoIcon = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: ${(props) => props.marginLeft};
	&:hover {
		cursor: pointer;
	}
`;

const DeleteIcon = styled(TodoIcon)`
	opacity: 0;
	width: 40px;
	border-radius: 50%;
	margin-right: 10px;

	&:hover {
		cursor: pointer;
		background-color: #ccc;
	}
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
		opacity: 1;
	}
`;

export {
	TodoInput,
	TodoItemText,
	DeleteIcon,
	TodoIcon,
	TodoImg,
	TodoItemContent,
	TodoItemDiv,
};
