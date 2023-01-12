import { putReorderCardApi } from 'src/api';
import { orchestrator } from 'satcheljs';

import { errorToastNotify } from 'src/utils';
import { reorderCardAction } from '../actions';
import { saveBoardsAction } from '../mutator-actions';

orchestrator(reorderCardAction, async (actionMessage) => {
	try {
		const newBoards = await putReorderCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
