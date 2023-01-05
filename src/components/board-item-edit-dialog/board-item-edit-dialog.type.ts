import { IBoard } from 'store-board/store';

export interface IBoardItemEditDialogProps {
	board: IBoard;
	handleCloseDialog: () => void;
	handleUpdateBoard: (title: string) => void;
}

export interface IBoardEditFormState {
	[key: string]: any;
}
