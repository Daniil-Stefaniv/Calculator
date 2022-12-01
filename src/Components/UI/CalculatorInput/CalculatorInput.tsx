import React from 'react';
import classes from './CalcilatorInput.module.css';
import type {CalculatorInputType} from './CalcilatorInputType';

const CalculatorInput = ({
	state,
	changeHandler,
	buttonHandler,
}: CalculatorInputType) => {
	const a = 3;
	return (
		<div className={classes.inputContainer}>
			<input
				readOnly
				onChange={() => changeHandler()}
				className={classes.Input}
				type='text'
				value={state}
			/>
			<button
				onPointerDown={() => buttonHandler()}
				onKeyDown={(e) => {
					return e.code === 'Enter' ? buttonHandler() : {};
				}}
				className={classes.deleteBtn}
			>
				{'←'}
			</button>
		</div>
	);
};

export default CalculatorInput;
