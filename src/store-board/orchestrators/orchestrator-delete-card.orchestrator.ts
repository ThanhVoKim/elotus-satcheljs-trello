import { orchestrator } from 'satcheljs';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { deleteCardAction } from 'store-board/actions';
import { deleteCardApi } from 'api';
import { errorToastNotify } from 'utils';

orchestrator(deleteCardAction, async (actionMessage) => {
	try {
		const newBoards = await deleteCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
