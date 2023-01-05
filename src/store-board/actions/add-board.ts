import { actionCreator, orchestrator } from 'satcheljs';
import { postCreateBoardsApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';

export const addBoardAction = actionCreator('ADD_BOARD', (title: string) => {
	return {
		title,
	};
});

orchestrator(addBoardAction, async (actionMessage) => {
	try {
		const newBoards = await postCreateBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error) {
		console.error(error);
	}
});
