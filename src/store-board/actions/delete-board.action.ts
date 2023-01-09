import { actionCreator } from 'satcheljs';

export const deleteBoardAction = actionCreator(
	'DELETE_BOARD',
	(id: string) => ({ id }),
);
