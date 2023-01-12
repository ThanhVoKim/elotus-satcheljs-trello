import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import { IBoard } from 'src/store-board/store';

export interface IBoardItemProps {
	board: IBoard;
	dragHandleProps?: DraggableProvidedDragHandleProps | null;
}
