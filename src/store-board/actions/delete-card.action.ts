import { actionCreator } from 'satcheljs';

export const deleteCardAction = actionCreator(
	'DELETE_CARD',
	(boardId: string, cardId: string) => ({ boardId, cardId }),
);
