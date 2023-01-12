import { orchestrator } from 'satcheljs';
import { deleteBoardsApi } from 'src/api';

import { errorToastNotify } from 'src/utils';
import { deleteBoardAction } from '../actions';
import { saveBoardsAction } from '../mutator-actions';

orchestrator(deleteBoardAction, async (actionMessage) => {
	try {
		const newBoards = await deleteBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
