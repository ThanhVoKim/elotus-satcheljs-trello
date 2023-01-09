import { actionCreator } from 'satcheljs';

export const addBoardAction = actionCreator('ADD_BOARD', (title: string) => {
	return {
		title,
	};
});
