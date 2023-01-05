import React, { Component } from 'react';
import { CloseIcon } from 'svg';
import { deleteCardAction } from 'store-board/actions';

import './card.style.scss';
import { ICardProps } from './index';
import { dispatch } from 'satcheljs';

export const prefixClassCard = 'card';

export class Card extends Component<ICardProps, Record<string, any>> {
	handleDelete = () => {
		const {
			card: { id = '' },
			boardId = '',
		} = this.props;

		dispatch(deleteCardAction(boardId, id));
	};

	render() {
		const { card } = this.props;
		return (
			<div className={prefixClassCard}>
				<div className={`${prefixClassCard}__content`}>
					<div className={`${prefixClassCard}__title`}>{card?.title}</div>
					<div className={`${prefixClassCard}__desc`}>{card?.content}</div>
				</div>
				<button
					type="button"
					className={`${prefixClassCard}__button-icon-delete`}
					onClick={this.handleDelete}
				>
					<CloseIcon width={20} fill="currentColor" />
				</button>
			</div>
		);
	}
}
