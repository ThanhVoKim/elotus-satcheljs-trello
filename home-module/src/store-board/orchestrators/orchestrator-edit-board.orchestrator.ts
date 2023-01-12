import { putEditBoardsApi } from 'src/api';
import { orchestrator } from 'satcheljs';

import { errorToastNotify } from 'src/utils';
import { editBoardAction } from '../actions';
import { saveBoardsAction } from '../mutator-actions';

orchestrator(editBoardAction, async (actionMessage) => {
	try {
		const newBoards = await putEditBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
