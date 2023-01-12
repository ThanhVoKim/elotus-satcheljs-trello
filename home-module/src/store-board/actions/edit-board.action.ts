import { action } from 'satcheljs';

export const editBoardAction = action(
	'EDIT_BOARD',
	(id: string, title: string) => {
		return {
			id,
			title,
		};
	},
);
