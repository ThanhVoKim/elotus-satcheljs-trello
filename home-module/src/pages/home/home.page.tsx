import { Component } from 'react';
import { observer } from 'mobx-react';
import {
	DragDropContext,
	Draggable,
	Droppable,
	DropResult,
} from 'react-beautiful-dnd';

import './home.style.scss';
import { BoardItemCreate } from 'src/components/board-create';
import { BoardItem } from 'src/components/board-item';
import { DROPPABLE_BOARDS_TYPE } from 'src/constant';
import boardsStore from 'src/store-board';
import { getBoardsSelector } from 'src/store-board/selectors';

export const prefixClassBoard = 'board';

@observer
export class Home extends Component {
	componentDidMount() {
		boardsStore.getBoardsAction();
	}

	onDragEnd = (result: DropResult) => {
		const { source, destination, type } = result;
		// dropped outside the list
		if (!destination) {
			return;
		}

		if (type === DROPPABLE_BOARDS_TYPE) {
			boardsStore.reorderBoardAction(source.index, destination.index);
		} else {
			const sInd = source.droppableId;
			const dInd = destination.droppableId;
			if (sInd === dInd) {
				boardsStore.reorderCardAction(sInd, source.index, destination.index);
			} else {
				boardsStore.moveCardAction(sInd, dInd, source.index, destination.index);
			}
		}
	};

	render() {
		const boards = getBoardsSelector();
		return (
			<div className={prefixClassBoard}>
				<DragDropContext onDragEnd={this.onDragEnd}>
					<Droppable
						droppableId="droppable-boards"
						direction="horizontal"
						type={DROPPABLE_BOARDS_TYPE}
					>
						{(provided, snapshot) => (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
								className={`${prefixClassBoard}__list ${
									snapshot.isDraggingOver ? 'dragging-over' : ''
								}`}
							>
								{boards.map((board, index) => {
									return (
										<Draggable
											key={board.id}
											draggableId={board.id!}
											index={index}
										>
											{(provided, snapshot) => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
													className={`${prefixClassBoard}__list-col ${
														snapshot.isDragging ? 'dragging' : ''
													}`}
													style={provided.draggableProps.style}
												>
													<BoardItem
														board={board}
														dragHandleProps={provided.dragHandleProps}
													/>
												</div>
											)}
										</Draggable>
									);
								})}
								{provided.placeholder}
								<div className={`${prefixClassBoard}__list-col`}>
									<BoardItemCreate />
								</div>
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
		);
	}
}
