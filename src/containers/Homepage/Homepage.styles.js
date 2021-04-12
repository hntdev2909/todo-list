import styled from 'styled-components';

const Loading = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	position: absolute;
	z-index: 3;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TodoList = styled.div`
	width: 100%;
	max-height: 550px;
	overflow: auto;
`;

const MainTodo = styled.div`
	position: relative;
	width: 100%;
	max-width: 550px;
	margin: 0 auto;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;

const HomepageTitle = styled.h1`
	font-size: 7rem;
	color: rgba(175, 47, 47, 0.15);
	line-height: 1rem;
	font-weight: 400;
`;

const HomepageContent = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
	background-color: #f5f5f5;
`;

export { HomepageContent, HomepageTitle, MainTodo, Loading, TodoList };
