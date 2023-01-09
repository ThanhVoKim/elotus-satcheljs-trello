import { action } from 'satcheljs';

export const deleteCardAction = action(
	'DELETE_CARD',
	(boardId: string, cardId: string) => ({ boardId, cardId }),
);
