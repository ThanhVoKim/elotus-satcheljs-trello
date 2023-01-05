import { actionCreator, orchestrator } from 'satcheljs';
import { postCreateCardApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';

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
	} catch (error) {
		console.error(error);
	}
});
