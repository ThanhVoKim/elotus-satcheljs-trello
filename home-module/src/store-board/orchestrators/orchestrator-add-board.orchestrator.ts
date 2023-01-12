import { postCreateBoardsApi } from 'src/api/';
import { orchestrator } from 'satcheljs';

import { errorToastNotify } from 'src/utils';
import { addBoardAction } from '../actions';
import { saveBoardsAction } from '../mutator-actions';

orchestrator(addBoardAction, async (actionMessage) => {
	try {
		const newBoards = await postCreateBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
