import { action } from 'satcheljs';

export const moveCardAction = action(
	'MOVE_CARD',
	(
		sourceBoardId: string,
		destinationBoardId: string,
		startIndex: number,
		endIndex: number,
	) => ({ sourceBoardId, destinationBoardId, startIndex, endIndex }),
);
