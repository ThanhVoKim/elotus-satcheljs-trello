import { IBoard } from 'store-board/store';

export interface IBoardItemProps {
	board: IBoard;
}

export interface IBoardItemState {
	showCreate: boolean;
}
