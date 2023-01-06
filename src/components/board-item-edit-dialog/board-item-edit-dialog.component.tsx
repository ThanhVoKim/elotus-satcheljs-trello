import { Dialog, Menu } from '@headlessui/react';
import React, { useState } from 'react';

import './board-item-edit-dialog.style.scss';

import { IBoardEditFormState, IBoardItemEditDialogProps } from './';
import { prefixClassDialog } from 'components/modal';

export const prefixClassBoardEdit = 'board-edit-dialog';

export const BoardItemEditDialog: React.FC<IBoardItemEditDialogProps> = (
	props,
) => {
	const { board, handleCloseDialog, handleUpdateBoard } = props;
	const [editForm, setEditForm] = useState<IBoardEditFormState>({
		title: board.title || '',
	});

	const onUpdateBoard = () => {
		const { title } = editForm;
		if (!title) return;
		handleUpdateBoard(title);
	};

	return (
		<div className={`${prefixClassBoardEdit}`}>
			<Dialog.Title className={`${prefixClassDialog}__title`}>
				Chỉnh sửa danh sách
			</Dialog.Title>
			<div className={`${prefixClassDialog}__body`}>
				<input
					type="text"
					className={`${prefixClassDialog}__input`}
					placeholder="Tên danh sách"
					value={editForm.title}
					onChange={(e) => {
						setEditForm((prevState) => ({
							...prevState,
							title: e.target.value,
						}));
					}}
				/>
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
