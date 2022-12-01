/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';

type firstContestType = {
	InputState?: string;
	SetInputState?: any;
};

const firstContext = React.createContext<firstContestType>({});

export {firstContext};
