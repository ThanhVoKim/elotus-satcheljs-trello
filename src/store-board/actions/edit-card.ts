import { actionCreator, orchestrator } from 'satcheljs';
import { putEditCardsApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

export const editCardAction = actionCreator(
	'EDIT_CARD',
	(boardId: string, id: string, title: string, content: string) => {
		return {
			boardId,
			id,
			title,
			content,
		};
	},
);

orchestrator(editCardAction, async (actionMessage) => {
	try {
		const newBoards = await putEditCardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
