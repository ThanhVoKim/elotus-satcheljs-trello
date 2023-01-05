import { orchestrator } from 'satcheljs';
import { saveBoardsAction } from 'store-board/mutator-actions';
import { getBoardsSelector } from 'store-board/selectors';
import { moveCardAction } from 'store-board/actions';
import { ICard } from 'store-board/store';

export const moveCardOrchestrator = orchestrator(
	moveCardAction,
	(actionMessage) => {
		// const { sourceBoardId, destinationBoardId, startIndex, endIndex } =
		// 	actionMessage;
		// const newBoards = [...getBoardsSelector()];
		// let sourceCards: ICard[] | undefined;
		// let destinationCards: ICard[] | undefined;
		// for (const board of newBoards) {
		// 	if (board.id === sourceBoardId) {
		// 		sourceCards = board.cards;
		// 	}
		// 	if (board.id === destinationBoardId) {
		// 		destinationCards = board.cards;
		// 	}
		// }
		// if (!sourceCards || !destinationCards) return;
		// const [changeItem] = sourceCards.splice(startIndex, 1);
		// destinationCards.splice(endIndex, 0, changeItem);
		// saveBoardsAction(newBoards);
	},
);
