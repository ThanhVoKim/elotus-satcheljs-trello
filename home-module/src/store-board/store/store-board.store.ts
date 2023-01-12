import { createStore } from 'satcheljs';

import { IBoardStore } from './';

const initialState = {
	boards: [],
};

export const getBoardStore = createStore<IBoardStore>(
	'boardStore',
	initialState,
);
