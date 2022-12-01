/* eslint-disable operator-linebreak */
import React, {useContext, useEffect} from 'react';
import classes from './App.module.css';
import Keyboard from './Keyboard/Keyboard';
import {firstContext} from '../Context/Context';
import CalculatorInput from './UI/CalculatorInput/CalculatorInput';

const App = () => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const {InputState, SetInputState} = useContext(firstContext);

	const storage = window.localStorage;

	useEffect(() => {
		if (InputState && InputState !== null) {
			storage.setItem('inputValue', InputState);
		}
	});

	useEffect(() => {
		if (storage.getItem('inputValue') !== null) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call, new-cap
			SetInputState(storage.getItem('inputValue'));
		}
	});

	const deleteSymbolFunc = () => {
		const stateToArray = InputState?.split('');
		stateToArray?.pop();
		const newState = stateToArray?.join('');
		// eslint-disable-next-line new-cap, @typescript-eslint/no-unsafe-call
		SetInputState(newState);

		if (newState === '') {
			storage.setItem('inputValue', '');
		}
	};

	return (
		<div className={classes.App}>
			<main className={classes.MainContent}>
				<CalculatorInput
					state={InputState}
					buttonHandler={deleteSymbolFunc}
				/>
				<Keyboard
					symbols={[
						1,
						2,
						3,
						'/',
						4,
						5,
						6,
						'*',
						7,
						8,
						9,
						'-',
						0,
						'.',
						'=',
						'+',
					]}
				/>
			</main>
		</div>
	);
};

export default App;
