import { action } from 'satcheljs';
export const reorderBoardAction = action(
	'REORDER_BOARD',
	(startIndex: number, endIndex: number) => ({
		startIndex,
		endIndex,
	}),
);
