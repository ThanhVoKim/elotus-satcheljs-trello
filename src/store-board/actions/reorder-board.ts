import { actionCreator, orchestrator } from 'satcheljs';
import { putReorderBoardsApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

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
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
