import { orchestrator } from 'satcheljs';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { getBoardsSelector } from 'store-board/selectors';
import { deleteCardAction } from 'store-board/actions';

export const deleteCardOrchestrator = orchestrator(
	deleteCardAction,
	(actionMessage) => {
		// const { boardId, cardId } = actionMessage;
		// const newBoards = [...getBoardsSelector()];
		// const selectedIndex = newBoards.findIndex((board) => board.id === boardId);
		// if (selectedIndex < 0) return;
		// const selectedBoard = newBoards[selectedIndex];
		// selectedBoard.cards = selectedBoard.cards?.filter(
		// 	(card) => card.id !== cardId,
		// );
		// saveBoardsAction(newBoards);
	},
);
