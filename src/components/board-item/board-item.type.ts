import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import { IBoard } from 'store-board/store';

export interface IBoardItemProps {
	board: IBoard;
	dragHandleProps?: DraggableProvidedDragHandleProps | null;
}
