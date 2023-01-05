import { orchestrator } from 'satcheljs';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { getBoardsSelector } from 'store-board/selectors';
import { reorderCardAction } from 'store-board/actions';

export const reorderCardOrchestrator = orchestrator(
	reorderCardAction,
	(actionMessage) => {
		// const { boardId, startIndex, endIndex } = actionMessage;
		// const newBoards = [...getBoardsSelector()];
		// const selectedIndex = newBoards.findIndex((board) => board.id === boardId);
		// if (selectedIndex < 0) return;
		// const selectedBoard = newBoards[selectedIndex];
		// const { cards = [] } = selectedBoard;
		// const [changeItem] = cards.splice(startIndex, 1);
		// cards.splice(endIndex, 0, changeItem);
		// saveBoardsAction(newBoards);
	},
);
