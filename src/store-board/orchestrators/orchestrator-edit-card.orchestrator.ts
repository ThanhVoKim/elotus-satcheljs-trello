import { putEditCardsApi } from 'api';
import { orchestrator } from 'satcheljs';
import { editCardAction } from 'store-board/actions';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

orchestrator(editCardAction, async (actionMessage) => {
	try {
		const newBoards = await putEditCardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
