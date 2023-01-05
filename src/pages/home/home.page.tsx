import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import './home.style.scss';

import { getBoardStore } from 'store-board/store';
import { BoardItem } from 'components/board-item';

import { reorderCardAction, moveCardAction } from 'store-board/actions';
import { dispatch } from 'satcheljs';
import { getBoardsAction } from 'store-board/actions/get-boards';
import { BoardItemCreate } from 'components/board-create';

export const prefixClassBoard = 'board';

@observer
export class Home extends Component {
	componentDidMount() {
		dispatch(getBoardsAction());
	}

	onDragEnd = (result: DropResult) => {
		const { source, destination } = result;

		// dropped outside the list
		if (!destination) {
			return;
		}

		const sInd = source.droppableId;
		const dInd = destination.droppableId;
		if (sInd === dInd) {
			dispatch(reorderCardAction(sInd, source.index, destination.index));
		} else {
			dispatch(moveCardAction(sInd, dInd, source.index, destination.index));
		}
	};

	render() {
		const { boards } = getBoardStore();
		return (
			<div className={prefixClassBoard}>
				<DragDropContext onDragEnd={this.onDragEnd}>
					<div className={`${prefixClassBoard}__list`}>
						{boards.map((board) => {
							return (
								<Droppable key={board.id} droppableId={board.id!}>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.droppableProps}
											className={`${prefixClassBoard}__list-col ${
												snapshot.isDraggingOver ? 'draggingOver' : ''
											}`}
										>
											<BoardItem board={board} />
											{provided.placeholder}
										</div>
									)}
								</Droppable>
							);
						})}
						<div className={`${prefixClassBoard}__list-col`}>
							<BoardItemCreate />
						</div>
					</div>
				</DragDropContext>
			</div>
		);
	}
}
