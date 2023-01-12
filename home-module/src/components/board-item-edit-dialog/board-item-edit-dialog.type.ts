import { IBoard } from 'src/store-board/store';

export interface IBoardItemEditDialogProps {
	board: IBoard;
	handleCloseDialog: () => void;
	handleUpdateBoard: (title: string) => void;
}

export interface IBoardEditFormState {
	title: string;
}
