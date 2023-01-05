export interface ICardCreateProps {
	boardId?: string;
	onClose: () => void;
}

export interface ICardCreateState {
	title?: string;
	content?: string;
}
