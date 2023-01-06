import React, { useState } from 'react';
import { CloseIcon, EditIcon } from 'svg';
import { deleteCardAction, editCardAction } from 'store-board/actions';

import './card.style.scss';
import { ICardProps } from './index';
import { dispatch } from 'satcheljs';
import { CardEditDialog } from 'components/card-edit-dialog';
import { Modal } from 'components/modal';

export const prefixClassCard = 'card';

export const Card: React.FC<ICardProps> = (props) => {
	const { card, boardId = '' } = props;
	const { id = '' } = card;

	const [isOpenDialog, setIsOpenDialog] = useState(false);

	const handleEdit = (title: string, content: string) => {
		dispatch(editCardAction(boardId, id, title, content));
		handleCloseDialog();
	};

	const handleDelete = () => {
		dispatch(deleteCardAction(boardId, id));
	};

	const handleCloseDialog = () => {
		setIsOpenDialog(false);
	};

	return (
		<>
			<div className={prefixClassCard}>
				<div className={`${prefixClassCard}__content`}>
					<div className={`${prefixClassCard}__title`}>{card?.title}</div>
					<div className={`${prefixClassCard}__desc`}>{card?.content}</div>
				</div>
				<div className={`${prefixClassCard}__action`}>
					<button
						type="button"
						className={`${prefixClassCard}__button-icon edit`}
						onClick={() => {
							setIsOpenDialog(true);
						}}
					>
						<EditIcon width={16} fill="currentColor" />
					</button>
					<button
						type="button"
						className={`${prefixClassCard}__button-icon delete`}
						onClick={handleDelete}
					>
						<CloseIcon width={16} fill="currentColor" />
					</button>
				</div>
			</div>
			<Modal isOpenDialog={isOpenDialog} handleCloseDialog={handleCloseDialog}>
				<CardEditDialog
					card={card}
					handleEditCard={handleEdit}
					handleCloseDialog={handleCloseDialog}
				/>
			</Modal>
		</>
	);
};
