import { orchestrator } from 'satcheljs';
import { getBoardsApi } from 'src/api';

import { errorToastNotify } from 'src/utils';
import { saveBoardsAction } from '../mutator-actions';
import { getBoardsAction } from '../actions';

orchestrator(getBoardsAction, async () => {
	try {
		const newBoards = await getBoardsApi();
		saveBoardsAction(newBoards);
	} catch (error: any) {
		console.error(error);
		errorToastNotify(error?.message || String(error));
	}
});
