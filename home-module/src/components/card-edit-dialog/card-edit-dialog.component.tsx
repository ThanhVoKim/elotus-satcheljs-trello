import { Dialog, Menu } from '@headlessui/react';
import React, { useState } from 'react';

import './card-edit-dialog.style.scss';

import { ICardEditFormState, ICardEditDialogProps } from '.';
import { prefixClassDialog } from 'src/components/modal';

export const prefixClassCardEdit = 'card-edit-dialog';

export const CardEditDialog: React.FC<ICardEditDialogProps> = (props) => {
	const { card, handleCloseDialog, handleEditCard } = props;

	const [editForm, setEditForm] = useState<ICardEditFormState>({
		title: card.title || '',
		content: card.content || '',
	});

	const onUpdateBoard = () => {
		const { title, content } = editForm;
		if (!title) return;
		handleEditCard(title, content);
	};

	return (
		<div className={`${prefixClassCardEdit}`}>
			<div className={`${prefixClassDialog}__title`}>Chỉnh sửa thẻ</div>
			<div className={`${prefixClassDialog}__body`}>
				<div className={`${prefixClassDialog}__row`}>
					<input
						type="text"
						className={`${prefixClassDialog}__input`}
						placeholder="Tiêu đề ..."
						value={editForm.title}
						onChange={(e) => {
							setEditForm((prevState) => ({
								...prevState,
								title: e.target.value,
							}));
						}}
					/>
				</div>
				<div className={`${prefixClassDialog}__row`}>
					<textarea
						placeholder="Mô tả ..."
						className={`${prefixClassDialog}__textarea`}
						value={editForm.content}
						onChange={(e) => {
							setEditForm((prevState) => ({
								...prevState,
								content: e.target.value,
							}));
						}}
						rows={4}
					/>
				</div>
			</div>
			<div className={`${prefixClassDialog}__action`}>
				<button
					className="btn btn--primary"
					onClick={() => {
						onUpdateBoard();
					}}
				>
					Cập nhật
				</button>
				<button
					className="btn btn--gray"
					onClick={() => {
						handleCloseDialog();
					}}
				>
					Hủy
				</button>
			</div>
		</div>
	);
};
