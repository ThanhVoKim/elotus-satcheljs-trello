import { orchestrator } from 'satcheljs';

import { postCreateCardApi } from 'src/api';
import { errorToastNotify } from 'src/utils';
import { addCardAction } from '../actions';
import { saveBoardsAction } from '../mutator-actions';

orchestrator(addCardAction, async (actionMessage) => {
	try {
		const newBoards = await postCreateCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
