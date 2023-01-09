import { putReorderBoardsApi } from 'api';
import { orchestrator } from 'satcheljs';
import { reorderBoardAction } from 'store-board/actions';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

orchestrator(reorderBoardAction, async (actionMessage) => {
	try {
		const newBoards = await putReorderBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
