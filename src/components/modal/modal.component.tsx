import { Dialog } from '@headlessui/react';
import React from 'react';

import './modal.style.scss';

import { IModalProps } from '.';

export const prefixClassModal = 'headless-modal';

export const Modal: React.FC<IModalProps> = (props) => {
	const { isOpenDialog, handleCloseDialog, children } = props;

	return (
		<div className={prefixClassModal}>
			<Dialog open={isOpenDialog} onClose={() => handleCloseDialog()}>
				<div className={`${prefixClassModal}__overlay`} />
				<div className={`${prefixClassModal}__container`}>
					<div className={`${prefixClassModal}__container-entry`}>
						<Dialog.Panel>{children}</Dialog.Panel>
					</div>
				</div>
			</Dialog>
		</div>
	);
};
