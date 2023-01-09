import { actionCreator } from 'satcheljs';

export const addCardAction = actionCreator(
	'ADD_CARD',
	(boardId: string, title: string, content: string) => {
		return {
			boardId,
			title,
			content,
		};
	},
);
