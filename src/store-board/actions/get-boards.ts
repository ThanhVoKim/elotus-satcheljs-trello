import { getBoardsApi } from 'api';
import { actionCreator, orchestrator } from 'satcheljs';
import { saveBoardsAction } from 'store-board/mutator-actions';

export const getBoardsAction = actionCreator('GET_BOARD');

orchestrator(getBoardsAction, async () => {
	try {
		const newBoards = await getBoardsApi();
		saveBoardsAction(newBoards);
	} catch (error) {
		console.error(error);
	}
});
