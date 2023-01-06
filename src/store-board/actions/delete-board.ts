import { actionCreator, orchestrator } from 'satcheljs';
import { deleteBoardsApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

export const deleteBoardAction = actionCreator(
	'DELETE_BOARD',
	(id: string) => ({ id }),
);

orchestrator(deleteBoardAction, async (actionMessage) => {
	try {
		const newBoards = await deleteBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
