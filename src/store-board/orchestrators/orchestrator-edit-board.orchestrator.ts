import { putEditBoardsApi } from 'api';
import { orchestrator } from 'satcheljs';
import { editBoardAction } from 'store-board/actions';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

orchestrator(editBoardAction, async (actionMessage) => {
	try {
		const newBoards = await putEditBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
