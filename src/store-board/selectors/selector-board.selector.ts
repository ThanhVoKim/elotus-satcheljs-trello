import { getBoardStore } from 'store-board/store';

export const getBoardsSelector = () => {
	const { boards } = getBoardStore();
	return boards;
};
