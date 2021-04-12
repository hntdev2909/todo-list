import styled from 'styled-components';

const ModuleTodoList = styled.ul`
	display: flex;
	justify-content: space-between;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
	padding: 0 16px;
`;

const ModuleTodoItem = styled.li`
	visibility: ${(props) => props.visible};
	display: flex;
	align-items: center;
`;

const ModuleTodoText = styled.p`
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	font-size: 14px;
	color: #777;
	border: ${(props) =>
		props.border ? `1px solid ${props.border}` : '1px solid white'};
	border-radius: 5px;
	box-sizing: border-box;

	&:hover {
		border: ${(props) => props.hoverBorder};
		cursor: pointer;
	}
`;

const ModuleTodoContent = styled.div`
	width: 100%;
	height: 50px;
	border: 1px solid #ccc;
	background-color: white;
	box-sizing: border-box;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		width: 530px;
		height: 5px;
		border: 1px solid #ccc;
		background-color: white;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
	}

	&::before {
		content: '';
		position: absolute;
		width: 510px;
		height: 5px;
		border: 1px solid #ccc;
		background-color: white;
		top: calc(100% + 5px);
		left: 50%;
		transform: translateX(-50%);
	}
`;

export { ModuleTodoContent, ModuleTodoText, ModuleTodoList, ModuleTodoItem };
