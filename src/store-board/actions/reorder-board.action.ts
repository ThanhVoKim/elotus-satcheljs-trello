import { actionCreator } from 'satcheljs';
export const reorderBoardAction = actionCreator(
	'REORDER_BOARD',
	(startIndex: number, endIndex: number) => ({
		startIndex,
		endIndex,
	}),
);
