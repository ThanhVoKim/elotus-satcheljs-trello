import { BOARDS_LOCAL_STORAGE } from 'src/constant';
import { getBoardsSelector } from 'src/store-board/selectors';
import { IBoard } from 'src/store-board/store';

import {
	ICreateBoardData,
	IDeleteBoardData,
	IEditBoardData,
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
			if (selectedIndex < 0) reject(new Error('No board found with id'));

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
