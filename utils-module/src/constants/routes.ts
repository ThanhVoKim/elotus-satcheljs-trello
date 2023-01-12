export const ROUTES = {
	home: {
		name: 'Home',
		path: '/',
	},
	login: {
		name: 'Login',
		path: '/login',
	},
	logout: {
		name: 'Logout',
		path: '/logout',
	},
	terms: {
		name: 'Terms',
		path: '/terms',
	},
	privacy: {
		name: 'Privacy',
		path: '/privacy',
	},
};

export type TRoutesName = keyof typeof ROUTES;
