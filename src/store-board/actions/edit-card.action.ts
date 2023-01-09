import { action } from 'satcheljs';

export const editCardAction = action(
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
