import { orchestrator } from 'satcheljs';

import { deleteCardApi } from 'src/api';
import { errorToastNotify } from 'src/utils';
import { saveBoardsAction } from '../mutator-actions';
import { deleteCardAction } from '../actions';

orchestrator(deleteCardAction, async (actionMessage) => {
	try {
		const newBoards = await deleteCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
