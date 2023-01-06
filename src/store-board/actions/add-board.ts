import { actionCreator, orchestrator } from 'satcheljs';
import { postCreateBoardsApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

export const addBoardAction = actionCreator('ADD_BOARD', (title: string) => {
	return {
		title,
	};
});

orchestrator(addBoardAction, async (actionMessage) => {
	try {
		const newBoards = await postCreateBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
