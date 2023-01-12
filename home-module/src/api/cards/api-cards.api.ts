import { BOARDS_LOCAL_STORAGE } from 'src/constant';
import boardsStore from 'src/store-board';
import { getBoardsSelector } from 'src/store-board/selectors';
import { IBoard, ICard } from 'src/store-board/store';

import {
	ICreateCardData,
	IDeleteCardData,
	IMoveCardData,
	IReorderCardData,
	IEditCardData,
} from '.';

export const postCreateCardApi = (data: ICreateCardData) => {
	return new Promise<IBoard[]>((resolve, reject) => {
		try {
			const { boardId, title, content } = data;
			const newBoards = [...getBoardsSelector()];
			const selectedIndex = newBoards.findIndex(
				(board) => board.id === boardId,
			);
			if (selectedIndex < 0) reject(new Error('No board found'));
			const selectedBoard = newBoards[selectedIndex];
			selectedBoard?.cards?.push({
				id: String(new Date().getTime()),
				title,
				content,
			});
			window.localStorage.setItem(
				BOARDS_LOCAL_STORAGE,
				JSON.stringify(newBoards),
			);
			resolve(newBoards);
		} catch (error) {
			reject(error);
		}
	});
};

export const putEditCardsApi = (data: IEditCardData) => {
	return new Promise<IBoard[]>((resolve, reject) => {
		try {
			const { boardId, id, title, content } = data;
			const newBoards = [...getBoardsSelector()];
			const selectedIndex = newBoards.findIndex(
				(board) => board.id === boardId,
			);
			if (selectedIndex < 0) reject(new Error('No board found'));

			const selectedBoard = newBoards[selectedIndex];
			selectedBoard.cards =
				selectedBoard.cards?.map((card) =>
					card.id === id ? { ...card, title, content } : card,
				) || [];

			window.localStorage.setItem(
				BOARDS_LOCAL_STORAGE,
				JSON.stringify(newBoards),
			);
			resolve(newBoards);
		} catch (error) {
			reject(error);
		}
	});
};

export const deleteCardApi = (data: IDeleteCardData) => {
	return new Promise<IBoard[]>((resolve, reject) => {
		try {
			const { boardId, cardId } = data;
			const newBoards = [...getBoardsSelector()];
			const selectedIndex = newBoards.findIndex(
				(board) => board.id === boardId,
			);
			if (selectedIndex < 0) reject(new Error('No board found'));
			const selectedBoard = newBoards[selectedIndex];
			selectedBoard.cards = selectedBoard.cards?.filter(
				(card) => card.id !== cardId,
			);
			window.localStorage.setItem(
				BOARDS_LOCAL_STORAGE,
				JSON.stringify(newBoards),
			);
			resolve(newBoards);
		} catch (error) {
			reject(error);
		}
	});
};

export const putMoveCardApi = (data: IMoveCardData) => {
	return new Promise<IBoard[]>((resolve, reject) => {
		try {
			const { sourceBoardId, destinationBoardId, startIndex, endIndex } = data;
			const newBoards = [...getBoardsSelector()];
			let sourceCards: ICard[] | undefined;
			let destinationCards: ICard[] | undefined;
			for (const board of newBoards) {
				if (board.id === sourceBoardId) {
					sourceCards = board.cards;
				}
				if (board.id === destinationBoardId) {
					destinationCards = board.cards;
				}
			}
			if (!sourceCards || !destinationCards) {
				reject(new Error('No source card or destination card found'));
				return;
			}
			const [changeItem] = sourceCards.splice(startIndex, 1);
			destinationCards.splice(endIndex, 0, changeItem);
			window.localStorage.setItem(
				BOARDS_LOCAL_STORAGE,
				JSON.stringify(newBoards),
			);
			resolve(newBoards);
		} catch (error) {
			reject(error);
		}
	});
};

export const putReorderCardApi = (data: IReorderCardData) => {
	return new Promise<IBoard[]>((resolve, reject) => {
		try {
			const { boardId, startIndex, endIndex } = data;
			const newBoards = [...getBoardsSelector()];
			const selectedIndex = newBoards.findIndex(
				(board) => board.id === boardId,
			);
			if (selectedIndex < 0) reject(new Error('No board found'));
			const selectedBoard = newBoards[selectedIndex];
			const { cards = [] } = selectedBoard;
			const [changeItem] = cards.splice(startIndex, 1);
			cards.splice(endIndex, 0, changeItem);
			window.localStorage.setItem(
				BOARDS_LOCAL_STORAGE,
				JSON.stringify(newBoards),
			);
			resolve(newBoards);
		} catch (error) {
			reject(error);
		}
	});
};
