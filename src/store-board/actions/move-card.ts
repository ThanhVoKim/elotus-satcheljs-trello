import { actionCreator, orchestrator } from 'satcheljs';
import { putMoveCardApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';

export const moveCardAction = actionCreator(
	'MOVE_CARD',
	(
		sourceBoardId: string,
		destinationBoardId: string,
		startIndex: number,
		endIndex: number,
	) => ({ sourceBoardId, destinationBoardId, startIndex, endIndex }),
);

orchestrator(moveCardAction, async (actionMessage) => {
	try {
		const newBoards = await putMoveCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error) {
		console.error(error);
	}
});
