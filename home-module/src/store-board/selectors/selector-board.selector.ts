import { getBoardStore } from '../store';

export const getBoardsSelector = () => {
	const { boards } = getBoardStore();
	return boards;
};
