import { action } from 'satcheljs';

export const addBoardAction = action('ADD_BOARD', (title: string) => {
	return {
		title,
	};
});
