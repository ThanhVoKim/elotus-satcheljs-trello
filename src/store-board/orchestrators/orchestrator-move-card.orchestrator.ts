import { orchestrator } from 'satcheljs';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { moveCardAction } from 'store-board/actions';
import { putMoveCardApi } from 'api';
import { errorToastNotify } from 'utils';

orchestrator(moveCardAction, async (actionMessage) => {
	try {
		const newBoards = await putMoveCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
