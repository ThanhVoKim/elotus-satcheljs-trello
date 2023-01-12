import { Dialog } from '@headlessui/react';

import './modal.style.scss';

import { IModalProps } from '.';

export const prefixClassDialog = 'headless-dialog';

export const Modal: React.FC<IModalProps> = (props) => {
	const { isOpenDialog, handleCloseDialog, children } = props;

	return isOpenDialog ? (
		<div className={prefixClassDialog}>
			<Dialog open={isOpenDialog} onClose={() => handleCloseDialog()}>
				<Dialog.Overlay className={`${prefixClassDialog}__overlay`} />
				<div className={`${prefixClassDialog}__container`}>
					<div className={`${prefixClassDialog}__container-entry`}>
						<Dialog.Panel>{children}</Dialog.Panel>
					</div>
				</div>
			</Dialog>
		</div>
	) : null;
};
