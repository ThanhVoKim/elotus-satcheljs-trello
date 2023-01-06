import { actionCreator, orchestrator } from 'satcheljs';
import { postCreateCardApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

export const addCardAction = actionCreator(
	'ADD_CARD',
	(boardId: string, title: string, content: string) => {
		return {
			boardId,
			title,
			content,
		};
	},
);

orchestrator(addCardAction, async (actionMessage) => {
	try {
		const newBoards = await postCreateCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
