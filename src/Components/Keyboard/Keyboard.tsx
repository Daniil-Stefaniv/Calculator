import React, {useContext} from 'react';
import classes from './Keyboard.module.css';
import type {KeyboardStyles} from './KeyboardStyles';
import RandomKey from '../RandomKey/RandomKey';
import CalculatorBtn from '../UI/CalculatorBtn/CalculatorBtn';
import {firstContext} from '../../Context/Context';

const Keyboard = ({symbols}: KeyboardStyles) => {
	const {InputState, SetInputState} = useContext(firstContext);

	const pushSymbol = (sym: string) => {
		if (sym !== '=') {
			SetInputState([InputState, sym].join(''));
		} else if (sym === '=') {
		}
	};

	const resultCalculating = (): void => {
		if (InputState !== undefined) {
			const opArr = ['/', '*', '+', '-'];
			const a = InputState.split('');
			let firstNum = '';
			let secondNum = '';
			let op = '';
			for (const sym of a) {
				if (opArr.includes(sym)) {
					op = sym;
					continue;
				}

				if (op === '') {
					firstNum += sym;
					continue;
				}

				secondNum += sym;
			}

			switch (op) {
				case '/':
					SetInputState(`${Number(firstNum) / Number(secondNum)}`);
					break;
				case '*':
					SetInputState(`${Number(firstNum) * Number(secondNum)}`);
					break;
				case '+':
					SetInputState(`${Number(firstNum) + Number(secondNum)}`);
					break;
				case '-':
					SetInputState(`${Number(firstNum) - Number(secondNum)}`);
					break;
			}
		}
	};

	return (
		<div>
			<div className={classes.Keyboard}>
				{symbols?.map((syms: number | string) => {
					return syms === '=' ? (
						<CalculatorBtn
							handler={() => resultCalculating()}
							key={RandomKey()}
							text={syms}
						/>
					) : (
						<CalculatorBtn
							handler={() => pushSymbol(`${syms}`)}
							key={RandomKey()}
							text={syms}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Keyboard;
