import {hover} from '@testing-library/user-event/dist/hover';
import React from 'react';
import classes from './CalculatorBtn.module.css';
import type {CalculatorBtnTypes} from './CalculatorBtnTypes';

const CalculatorBtn = ({text, handler}: CalculatorBtnTypes) => (
	<div>
		<button
			onPointerUp={handler}
			onKeyDown={(e) => {
				return e.code === 'Enter' ? handler() : {};
			}}
			className={
				text === '='
					? [classes.Btn, classes.ResultBtn].join(' ')
					: classes.Btn
			}
		>
			{text}
		</button>
	</div>
);

export default CalculatorBtn;
