import { createStore } from 'satcheljs';

import { IBoardStore } from './';

const initialState = {
	boards: [
		{
			id: '1',
			title: 'Categorized',
			cards: [],
		},
		{
			id: '2',
			title: 'To-Do',
			cards: [],
		},
		{
			id: '3',
			title: 'Do Today',
			cards: [],
		},
		{
			id: '4',
			title: 'Inprogress',
			cards: [],
		},
		{
			id: '5',
			title: 'Done',
			cards: [],
		},
	],
};

export const getBoardStore = createStore<IBoardStore>(
	'boardStore',
	initialState,
);
