import { orchestrator } from 'satcheljs';
import { deleteBoardsApi } from 'api';
import { deleteBoardAction } from 'store-board/actions';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

orchestrator(deleteBoardAction, async (actionMessage) => {
	try {
		const newBoards = await deleteBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
