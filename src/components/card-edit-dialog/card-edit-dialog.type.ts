import { ICard } from 'store-board/store';

export interface ICardEditDialogProps {
	card: ICard;
	handleCloseDialog: () => void;
	handleEditCard: (title: string, content: string) => void;
}

export interface ICardEditFormState {
	title: string;
	content: string;
}
