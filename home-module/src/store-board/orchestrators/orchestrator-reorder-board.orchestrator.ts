import { putReorderBoardsApi } from 'src/api';
import { orchestrator } from 'satcheljs';

import { errorToastNotify } from 'src/utils';
import { reorderBoardAction } from '../actions';
import { saveBoardsAction } from '../mutator-actions';

orchestrator(reorderBoardAction, async (actionMessage) => {
	try {
		const newBoards = await putReorderBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
