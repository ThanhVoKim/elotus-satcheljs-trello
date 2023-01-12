import { orchestrator } from 'satcheljs';

import { putMoveCardApi } from 'src/api';
import { errorToastNotify } from 'src/utils';
import { moveCardAction } from '../actions';
import { saveBoardsAction } from '../mutator-actions';

orchestrator(moveCardAction, async (actionMessage) => {
	try {
		const newBoards = await putMoveCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
