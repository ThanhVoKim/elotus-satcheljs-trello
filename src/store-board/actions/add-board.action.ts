import { action } from 'satcheljs';

export const addBoardAction = action('ADD_BOARD', (title: string) => {
	console.log('addBoardAction');
	return {
		title,
	};
});
