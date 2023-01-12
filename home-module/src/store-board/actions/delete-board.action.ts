import { action } from 'satcheljs';

export const deleteBoardAction = action('DELETE_BOARD', (id: string) => ({
	id,
}));
