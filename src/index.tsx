/* eslint-disable @typescript-eslint/comma-dangle */
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import {firstContext} from './Context/Context';

const Main = () => {
	const [InputState, SetInputState] = useState('');
	return (
		<firstContext.Provider value={{InputState, SetInputState}}>
			<App />
		</firstContext.Provider>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Main />);
