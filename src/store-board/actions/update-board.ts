import { actionCreator, orchestrator } from 'satcheljs';
import { putUpdateBoardsApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';

export const updateBoardAction = actionCreator(
	'UPDATE_BOARD',
	(id: string, title: string) => {
		return {
			id,
			title,
		};
	},
);

orchestrator(updateBoardAction, async (actionMessage) => {
	try {
		const newBoards = await putUpdateBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error) {
		console.error(error);
	}
});
