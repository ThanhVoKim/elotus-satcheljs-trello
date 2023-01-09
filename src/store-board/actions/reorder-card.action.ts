import { actionCreator } from 'satcheljs';

export const reorderCardAction = actionCreator(
	'REORDER_CARD',
	(boardId: string, startIndex: number, endIndex: number) => ({
		boardId,
		startIndex,
		endIndex,
	}),
);
