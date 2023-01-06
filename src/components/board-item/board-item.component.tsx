import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { AddCircleOutlineIcon } from 'svg';
import { IBoardItemProps } from './board-item.type';
import { Card } from 'components/card';
import { CardCreate } from 'components/card-create';
import { BoardItemButtonMore } from 'components/board-item-button-more';
import { DROPPABLE_CARDS_TYPE } from 'constant';

import './board-item.style.scss';

export const prefixClassBoardItem = 'board-item';

export const BoardItem: React.FC<IBoardItemProps> = (props) => {
	const { board, dragHandleProps } = props;
	const { cards = [], title, id } = board;

	const [showCreateBoard, setShowCreateBoard] = useState(false);

	const handleShowCreate = () => {
		setShowCreateBoard((prevState) => !prevState);
	};

	return (
		<div
			className={`${prefixClassBoardItem} ${
				cards.length > 0 ? 'has-cards' : 'no-cards'
			}`}
		>
			<div className={`${prefixClassBoardItem}__header`}>
				<div className={`${prefixClassBoardItem}__title`} {...dragHandleProps}>
					<button
						type="button"
						className={`${prefixClassBoardItem}__button-icon-add`}
						onClick={handleShowCreate}
					>
						<AddCircleOutlineIcon width={20} />
					</button>

					<div className={`${prefixClassBoardItem}__title-content`}>
						{title}
					</div>

					<div className={`${prefixClassBoardItem}__button-more`}>
						<BoardItemButtonMore board={board} />
					</div>
				</div>
				{showCreateBoard && (
					<CardCreate
						boardId={id}
						onClose={() => {
							setShowCreateBoard(false);
						}}
					/>
				)}
			</div>
			<Droppable droppableId={`${id}`} type={DROPPABLE_CARDS_TYPE}>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
						className={`${prefixClassBoardItem}__list ${
							snapshot.isDraggingOver ? 'draggingOver' : ''
						}`}
					>
						{cards.map((card, index) => (
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
										<Card card={card} boardId={id} />
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};
