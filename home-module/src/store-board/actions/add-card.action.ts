import { action } from 'satcheljs';

export const addCardAction = action(
	'ADD_CARD',
	(boardId: string, title: string, content: string) => {
		return {
			boardId,
			title,
			content,
		};
	},
);
