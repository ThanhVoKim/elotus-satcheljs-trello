import { actionCreator, orchestrator } from 'satcheljs';
import { putMoveCardApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

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
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
