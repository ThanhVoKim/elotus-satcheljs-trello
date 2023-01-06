import { deleteCardApi } from 'api';
import { actionCreator, orchestrator } from 'satcheljs';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

export const deleteCardAction = actionCreator(
	'DELETE_CARD',
	(boardId: string, cardId: string) => ({ boardId, cardId }),
);

orchestrator(deleteCardAction, async (actionMessage) => {
	try {
		const newBoards = await deleteCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
