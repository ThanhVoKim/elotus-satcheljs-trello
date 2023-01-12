import React, { Component } from 'react';
import { prefixClassBoardItem } from '../board-item';

import { IBoardCreateProps, IBoardCreateState } from './';
import boardsStore from 'src/store-board';

import './board-create.style.scss';

export const prefixClassBoardCreate = 'board-create';

export class BoardItemCreate extends Component<
	IBoardCreateProps,
	IBoardCreateState
> {
	constructor(props: IBoardCreateProps) {
		super(props);
		this.state = {
			title: '',
			showCreateInput: false,
		};
	}

	handleChangeInput = (value = '') => {
		this.setState((prevState) => ({ ...prevState, title: value }));
	};

	handleCreate = () => {
		const { title = '' } = this.state;
		if (!title) return;
		boardsStore.addBoardAction(title);
		this.setState({ title: '' });
	};

	render() {
		const { title, showCreateInput } = this.state;
		return showCreateInput ? (
			<div className={`${prefixClassBoardCreate} ${prefixClassBoardItem}`}>
				<input
					type="text"
					className={`${prefixClassBoardCreate}__input`}
					placeholder="Tên danh sách"
					value={title}
					onChange={(e) => {
						this.handleChangeInput(e.target.value);
					}}
				/>
				<div className={`${prefixClassBoardCreate}__button-wrap`}>
					<button
						type="button"
						className="btn btn--green"
						onClick={this.handleCreate}
					>
						Lưu
					</button>
					<button
						type="button"
						className="btn btn--gray"
						onClick={() => {
							this.setState({ title: '', showCreateInput: false });
						}}
					>
						Hủy
					</button>
				</div>
			</div>
		) : (
			<button
				className={`${prefixClassBoardCreate}__button-show-input`}
				type="button"
				onClick={() => {
					this.setState({ title: '', showCreateInput: true });
				}}
			>
				Thêm danh sách
			</button>
		);
	}
}
