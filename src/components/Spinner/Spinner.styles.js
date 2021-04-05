import styled, { keyframes } from 'styled-components';

const ldsOne = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const ldsThree = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const ldsTwo = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const SpinnerChild = styled.div`
	position: absolute;
	top: 33px;
	width: 13px;
	height: 13px;
	border-radius: 50%;
	background: #fff;
	animation-timing-function: cubic-bezier(0, 1, 1, 0);
	left: ${(props) => props.left};

	&:nth-child(1) {
		animation: ${ldsOne} 0.6s infinite;
	}
	&:nth-child(2) {
		animation: ${ldsTwo} 0.6s infinite;
	}
	&:nth-child(3) {
		animation: ${ldsTwo} 0.6s infinite;
	}
	&:nth-child(4) {
		animation: ${ldsThree} 0.6s infinite;
	}
`;

const SpinnerContainer = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
`;

export { SpinnerContainer, SpinnerChild };
