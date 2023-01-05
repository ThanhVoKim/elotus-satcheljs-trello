import React, { Component } from 'react';

import './board-item.style.scss';
import { AddCircleOutlineIcon } from 'svg';
import { IBoardItemProps, IBoardItemState } from './board-item.type';
import { Card } from 'components/card';
import { CardCreate } from 'components/card-create';
import { Draggable } from 'react-beautiful-dnd';
import { BoardItemButtonMore } from 'components/board-item-button-more';

export const prefixClassBoardItem = 'board-item';

export class BoardItem extends Component<IBoardItemProps, IBoardItemState> {
	constructor(props: IBoardItemProps) {
		super(props);
		this.state = {
			showCreate: false,
		};
	}

	handleShowCreate = () => {
		this.setState((prevState) => ({
			...prevState,
			showCreate: !prevState.showCreate,
		}));
	};

	render() {
		const { board } = this.props;
		const { showCreate } = this.state;
		return (
			<div className={prefixClassBoardItem}>
				<div className={`${prefixClassBoardItem}__title`}>
					<button
						type="button"
						className={`${prefixClassBoardItem}__button-icon-add`}
						onClick={this.handleShowCreate}
					>
						<AddCircleOutlineIcon width={20} fill="currentColor" />
					</button>

					<div className={`${prefixClassBoardItem}__title-content`}>
						{board.title}
					</div>

					<div className={`${prefixClassBoardItem}__button-more`}>
						<BoardItemButtonMore board={board} />
					</div>
				</div>
				{showCreate && (
					<CardCreate
						boardId={board.id}
						onClose={() => {
							this.setState((prevState) => ({
								...prevState,
								showCreate: false,
							}));
						}}
					/>
				)}
				<div className={`${prefixClassBoardItem}__list`}>
					{board?.cards?.map((card, index) => (
						<Draggable key={card.id} draggableId={card.id!} index={index}>
							{(provided, snapshot) => (
								<div
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
									className={`${prefixClassBoardItem}__list-col ${
										snapshot.isDragging ? 'dragging' : ''
									}`}
									style={{ ...provided.draggableProps.style }}
								>
									<Card card={card} boardId={board.id} />
								</div>
							)}
						</Draggable>
					))}
				</div>
			</div>
		);
	}
}
