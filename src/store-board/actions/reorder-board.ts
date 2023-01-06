import { actionCreator, orchestrator } from 'satcheljs';
import { putReorderBoardsApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';

export const reorderBoardAction = actionCreator(
	'REORDER_BOARD',
	(startIndex: number, endIndex: number) => ({
		startIndex,
		endIndex,
	}),
);

orchestrator(reorderBoardAction, async (actionMessage) => {
	try {
		const newBoards = await putReorderBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error) {
		console.error(error);
	}
});
