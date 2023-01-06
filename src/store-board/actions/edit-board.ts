import { actionCreator, orchestrator } from 'satcheljs';
import { putEditBoardsApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';

export const editBoardAction = actionCreator(
	'EDIT_BOARD',
	(id: string, title: string) => {
		return {
			id,
			title,
		};
	},
);

orchestrator(editBoardAction, async (actionMessage) => {
	try {
		const newBoards = await putEditBoardsApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error) {
		console.error(error);
	}
});
