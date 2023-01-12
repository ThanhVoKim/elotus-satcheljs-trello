import { toast, ToastOptions } from 'react-toastify';

const toastOptions: ToastOptions = {
	position: 'top-right',
	autoClose: 3500,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'light',
	toastId: 'toastId',
};

export function errorToastNotify(content = '', options?: ToastOptions) {
	toast(content, { type: 'error', ...toastOptions, ...options });
}
