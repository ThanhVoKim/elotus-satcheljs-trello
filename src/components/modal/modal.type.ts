import { IBoard } from 'store-board/store';

export interface IModalProps {
	children: React.ReactNode;
	handleCloseDialog: () => void;
	isOpenDialog: boolean;
}
