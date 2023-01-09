import { actionCreator } from 'satcheljs';

export const editCardAction = actionCreator(
	'EDIT_CARD',
	(boardId: string, id: string, title: string, content: string) => {
		return {
			boardId,
			id,
			title,
			content,
		};
	},
);
