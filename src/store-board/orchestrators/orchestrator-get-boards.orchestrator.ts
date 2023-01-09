import { orchestrator } from 'satcheljs';
import { getBoardsApi } from 'api';
import { getBoardsAction } from 'store-board/actions';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { errorToastNotify } from 'utils';

orchestrator(getBoardsAction, async () => {
	try {
		const newBoards = await getBoardsApi();
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
