import { getBoardsApi } from 'api';
import { actionCreator, orchestrator } from 'satcheljs';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

export const getBoardsAction = actionCreator('GET_BOARD');

orchestrator(getBoardsAction, async () => {
	try {
		const newBoards = await getBoardsApi();
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
