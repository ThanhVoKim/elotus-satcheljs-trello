import { Component } from 'react';
import { observer } from 'mobx-react';
import {
	DragDropContext,
	Draggable,
	Droppable,
	DropResult,
} from 'react-beautiful-dnd';

import './home.style.scss';

import { BoardItem } from 'components/board-item';

import {
	reorderBoardAction,
	moveCardAction,
	reorderCardAction,
} from 'store-board/actions';
import { BoardItemCreate } from 'components/board-create';
import { getBoardsSelector } from 'store-board/selectors';
import { DROPPABLE_BOARDS_TYPE } from 'constant';
import { boardStore } from 'store-board';

export const prefixClassBoard = 'board';

@observer
export class Home extends Component {
	componentDidMount() {
		boardStore.actions.getBoardsAction();
	}

	onDragEnd = (result: DropResult) => {
		const { source, destination, type } = result;
		// dropped outside the list
		if (!destination) {
			return;
		}

		if (type === DROPPABLE_BOARDS_TYPE) {
			reorderBoardAction(source.index, destination.index);
		} else {
			const sInd = source.droppableId;
			const dInd = destination.droppableId;
			if (sInd === dInd) {
				reorderCardAction(sInd, source.index, destination.index);
			} else {
				moveCardAction(sInd, dInd, source.index, destination.index);
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
