import React, { useState } from 'react';
import { CloseIcon, EditIcon } from 'src/svg';
import boardsStore from 'src/store-board';

import './card.style.scss';
import { ICardProps } from './index';
import { CardEditDialog } from 'src/components/card-edit-dialog';
import { Modal } from 'src/components/modal';

export const prefixClassCard = 'card';

export const Card: React.FC<ICardProps> = (props) => {
	const { card, boardId = '' } = props;
	const { id = '', title = '', content = '' } = card;

	const [isOpenDialog, setIsOpenDialog] = useState(false);

	const handleEdit = (title: string, content: string) => {
		boardsStore.editCardAction(boardId, id, title, content);
		handleCloseDialog();
	};

	const handleDelete = () => {
		boardsStore.deleteCardAction(boardId, id);
	};

	const handleCloseDialog = () => {
		setIsOpenDialog(false);
	};

	return (
		<>
			<div className={prefixClassCard}>
				<div className={`${prefixClassCard}__content`}>
					<div className={`${prefixClassCard}__title`}>{title}</div>
					<div className={`${prefixClassCard}__desc`}>
						{content?.length > 100
							? `${content?.substring(0, 100)}...`
							: content}
					</div>
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
