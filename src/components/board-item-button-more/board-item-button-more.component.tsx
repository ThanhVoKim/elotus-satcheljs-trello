import React, { Component, useState } from 'react';
import { Menu } from '@headlessui/react';

import { BoardItemEditDialog } from 'components/board-item-edit-dialog';
import { Modal } from 'components/modal';
import { dispatch } from 'satcheljs';
import { deleteBoardAction, editBoardAction } from 'store-board/actions';
import { MoreVerticalIcon } from 'svg';

import './board-item-button-more.style.scss';
import { IBoardItemButtonMoreProps } from './board-item-button-more.type';

export const prefixClassBoardButtonMore = 'board-button-more';

export const BoardItemButtonMore: React.FC<IBoardItemButtonMoreProps> = (
	props,
) => {
	const { board } = props;

	const [isOpenDialog, setIsOpenDialog] = useState(false);

	const handleDeleteBoard = () => {
		dispatch(deleteBoardAction(board.id!));
	};

	const handleUpdateBoard = (title: string) => {
		dispatch(editBoardAction(board.id!, title));
		handleCloseDialog();
	};

	const handleCloseDialog = () => {
		setIsOpenDialog(false);
	};

	return (
		<div className={prefixClassBoardButtonMore}>
			<Menu>
				<Menu.Button className={`${prefixClassBoardButtonMore}__menu-button`}>
					<MoreVerticalIcon width={20} />
				</Menu.Button>
				<Menu.Items className={`${prefixClassBoardButtonMore}__menu-items`}>
					<Menu.Item>
						{({ active }) => (
							<button
								className={`${prefixClassBoardButtonMore}__menu-item ${
									active ? 'active' : ''
								}`}
								type="button"
								onClick={handleDeleteBoard}
							>
								Xóa danh sách
							</button>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<button
								className={`${prefixClassBoardButtonMore}__menu-item ${
									active ? 'active' : ''
								}`}
								type="button"
								onClick={() => {
									setIsOpenDialog(true);
								}}
							>
								Chỉnh sửa danh sách
							</button>
						)}
					</Menu.Item>
				</Menu.Items>
			</Menu>
			<Modal handleCloseDialog={handleCloseDialog} isOpenDialog={isOpenDialog}>
				<BoardItemEditDialog
					handleCloseDialog={handleCloseDialog}
					handleUpdateBoard={handleUpdateBoard}
					board={board}
				/>
			</Modal>
		</div>
	);
};
