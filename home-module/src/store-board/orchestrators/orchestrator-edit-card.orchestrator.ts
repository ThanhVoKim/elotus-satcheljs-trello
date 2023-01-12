import { putEditCardsApi } from 'src/api';
import { orchestrator } from 'satcheljs';

import { errorToastNotify } from 'src/utils';
import { editCardAction } from '../actions';
import { saveBoardsAction } from '../mutator-actions';

orchestrator(editCardAction, async (actionMessage) => {
	try {
		const newBoards = await putEditCardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
