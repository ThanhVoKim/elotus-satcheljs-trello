import { orchestrator } from 'satcheljs';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { getBoardsSelector } from 'store-board/selectors';
import { addBoardAction } from 'store-board/actions';

export const addCardOrchestrator = orchestrator(
	addBoardAction,
	(actionMessage) => {
		console.log({ actionMessage });

		// const { boardId, title, content } = actionMessage;
		// const newBoards = [...getBoardsSelector()];
		// const selectedIndex = newBoards.findIndex((board) => board.id === boardId);
		// if (selectedIndex < 0) return;

		// const selectedBoard = newBoards[selectedIndex];
		// selectedBoard?.cards?.push({
		// 	id: String(new Date().getTime()),
		// 	title,
		// 	content,
		// });
		// saveBoardsAction(newBoards);
	},
);
