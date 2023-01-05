import React, { Component } from 'react';
import { dispatch } from 'satcheljs';
import { addCardAction } from 'store-board/actions';
import { ICardCreateProps, ICardCreateState } from '.';

import './card-create.style.scss';

export const prefixClassCardCreate = 'card-create';

export class CardCreate extends Component<ICardCreateProps, ICardCreateState> {
	constructor(props: ICardCreateProps) {
		super(props);
		this.state = {
			title: '',
			content: '',
		};
	}

	handleChangeInput = (key = 'title', value = '') => {
		this.setState((prevState) => ({ ...prevState, [key]: value }));
	};

	handleCreate = () => {
		const { title = '', content = '' } = this.state;
		const { boardId = '' } = this.props;
		if (!title && !content) return;
		dispatch(addCardAction(boardId, title, content));
		this.setState({ title: '', content: '' });
	};

	render() {
		const { title, content } = this.state;
		return (
			<div className={`${prefixClassCardCreate}`}>
				<input
					type="text"
					className={`${prefixClassCardCreate}__input`}
					value={title}
					placeholder="Tiêu đề"
					onChange={(e) => {
						this.handleChangeInput('title', e.target.value);
					}}
				/>
				<textarea
					placeholder="Mô tả ..."
					className={`${prefixClassCardCreate}__textarea`}
					value={content}
					onChange={(e) => {
						this.handleChangeInput('content', e.target.value);
					}}
					rows={4}
				/>
				<div className={`${prefixClassCardCreate}__button-wrap`}>
					<button
						type="button"
						className="btn btn--primary"
						onClick={this.handleCreate}
					>
						Thêm
					</button>
					<button
						type="button"
						className="btn btn--gray"
						onClick={() => {
							this.props.onClose();
						}}
					>
						Hủy
					</button>
				</div>
			</div>
		);
	}
}
