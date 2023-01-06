import { BOARDS_LOCAL_STORAGE } from 'constant';
import { getBoardsSelector } from 'store-board/selectors';
import { IBoard, ICard } from 'store-board/store';
import {
	ICreateBoardData,
	ICreateCardData,
	IDeleteBoardData,
	IDeleteCardData,
	IMoveCardData,
	IReorderCardData,
	IEditBoardData,
	IEditCardData,
	IReorderBoardData,
} from './';

export const getBoardsApi = () => {
	return new Promise<IBoard[]>((resolve, reject) => {
		try {
			const boards = window.localStorage.getItem(BOARDS_LOCAL_STORAGE);
			resolve(boards ? JSON.parse(boards) : []);
		} catch (error) {
			reject(error);
		}
	});
};

export const postCreateBoardsApi = (data: ICreateBoardData) => {
	return new Promise<IBoard[]>((resolve, reject) => {
		try {
			const { title } = data;
			const newBoards = [...getBoardsSelector()];
			newBoards.push({
				id: String(new Date().getTime()),
				title,
				cards: [],
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

export const putEditBoardsApi = (data: IEditBoardData) => {
	return new Promise<IBoard[]>((resolve, reject) => {
		try {
			const { id, title } = data;
			const newBoards = [...getBoardsSelector()];
			const selectedIndex = newBoards.findIndex((board) => board.id === id);
			if (selectedIndex < 0) reject('No board found with id');

			const selectedBoard = newBoards[selectedIndex];
			selectedBoard.title = title;
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

export const deleteBoardsApi = (data: IDeleteBoardData) => {
	return new Promise<IBoard[]>((resolve, reject) => {
		try {
			const { id: boardId } = data;
			const newBoards = [...getBoardsSelector()].filter(
				(board) => board.id !== boardId,
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

export const putReorderBoardsApi = (data: IReorderBoardData) => {
	return new Promise<IBoard[]>((resolve, reject) => {
		try {
			const { startIndex, endIndex } = data;
			const newBoards = [...getBoardsSelector()];
			const [changeItem] = newBoards.splice(startIndex, 1);
			newBoards.splice(endIndex, 0, changeItem);
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

export const postCreateCardApi = (data: ICreateCardData) => {
	return new Promise<IBoard[]>((resolve, reject) => {
		try {
			const { boardId, title, content } = data;
			const newBoards = [...getBoardsSelector()];
			const selectedIndex = newBoards.findIndex(
				(board) => board.id === boardId,
			);
			if (selectedIndex < 0) reject('No board found');

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
			if (selectedIndex < 0) reject('No board found');

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
			if (selectedIndex < 0) reject('No board found');
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
				reject('No source card or destination card found');
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
			if (selectedIndex < 0) reject('No board found');
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
