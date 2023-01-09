import { orchestrator } from 'satcheljs';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { addCardAction } from 'store-board/actions';
import { postCreateCardApi } from 'api';
import { errorToastNotify } from 'utils';

orchestrator(addCardAction, async (actionMessage) => {
	try {
		const newBoards = await postCreateCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
