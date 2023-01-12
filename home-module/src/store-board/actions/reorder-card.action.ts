import { action } from 'satcheljs';

export const reorderCardAction = action(
	'REORDER_CARD',
	(boardId: string, startIndex: number, endIndex: number) => ({
		boardId,
		startIndex,
		endIndex,
	}),
);
