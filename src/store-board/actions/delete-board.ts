import { actionCreator, orchestrator } from 'satcheljs';
import { deleteBoardsApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';

export const deleteBoardAction = actionCreator(
	'DELETE_BOARD',
	(id: string) => ({ id }),
);

orchestrator(deleteBoardAction, async (actionMessage) => {
	try {
		const newBoards = await deleteBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error) {
		console.error(error);
	}
});
