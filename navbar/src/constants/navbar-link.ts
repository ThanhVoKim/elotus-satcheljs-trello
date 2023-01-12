import { constants } from '@thanh/utils-module';

const { ROUTES } = constants;

type TRouteName = keyof typeof ROUTES;

const navbarName: TRouteName[] = ['home', 'terms', 'privacy'];

export const NAVBAR_ROUTES = navbarName.map((name) => ROUTES[name]);
