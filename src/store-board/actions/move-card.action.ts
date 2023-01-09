import { actionCreator } from 'satcheljs';

export const moveCardAction = actionCreator(
	'MOVE_CARD',
	(
		sourceBoardId: string,
		destinationBoardId: string,
		startIndex: number,
		endIndex: number,
	) => ({ sourceBoardId, destinationBoardId, startIndex, endIndex }),
);
