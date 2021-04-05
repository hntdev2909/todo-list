import React from 'react';
import { SpinnerContainer, SpinnerChild } from './Spinner.styles';

function Spinner() {
	return (
		<SpinnerContainer>
			<SpinnerChild left="8px"></SpinnerChild>
			<SpinnerChild left="8px"></SpinnerChild>
			<SpinnerChild left="32px"></SpinnerChild>
			<SpinnerChild left="56px"></SpinnerChild>
		</SpinnerContainer>
	);
}

export default Spinner;
