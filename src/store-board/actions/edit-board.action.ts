import { actionCreator } from 'satcheljs';

export const editBoardAction = actionCreator(
	'EDIT_BOARD',
	(id: string, title: string) => {
		return {
			id,
			title,
		};
	},
);
