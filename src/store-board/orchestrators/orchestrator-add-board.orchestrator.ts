import { postCreateBoardsApi } from 'api';
import { orchestrator } from 'satcheljs';
import { addBoardAction } from 'store-board/actions';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

orchestrator(addBoardAction, async (actionMessage) => {
	try {
		const newBoards = await postCreateBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
