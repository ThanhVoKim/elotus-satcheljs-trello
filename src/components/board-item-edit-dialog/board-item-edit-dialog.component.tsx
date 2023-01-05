import { Dialog, Menu } from '@headlessui/react';
import React, { useState } from 'react';

import './board-item-edit-dialog.style.scss';

import { IBoardEditFormState, IBoardItemEditDialogProps } from './';

export const prefixClassBoardEdit = 'board-edit-dialog';

export const BoardItemEditDialog: React.FC<IBoardItemEditDialogProps> = (
	props,
) => {
	const { board, handleCloseDialog, handleUpdateBoard } = props;
	const [editForm, setEditForm] = useState<IBoardEditFormState>({
		title: board.title,
	});

	const onUpdateBoard = () => {
		const { title = '' } = editForm;
		if (!title) return;
		handleUpdateBoard(title);
	};

	return (
		<div className={`${prefixClassBoardEdit}`}>
			<Dialog.Title className={`${prefixClassBoardEdit}__title`}>
				Chỉnh sửa danh mục
			</Dialog.Title>
			<Dialog.Description className={`${prefixClassBoardEdit}__description`}>
				<input
					type="text"
					className={`${prefixClassBoardEdit}__input`}
					value={editForm.title}
					onChange={(e) => {
						setEditForm((prevState) => ({
							...prevState,
							title: e.target.value,
						}));
					}}
				/>
			</Dialog.Description>
			<div className={`${prefixClassBoardEdit}__action`}>
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
