import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { Navbar } from './layout/navbar/';

const lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Navbar,
	errorBoundary(err, info, props) {
		// Customize the root error boundary for your microfrontend here.
		return <div>{err?.message || String(err)}</div>;
	},
});

export const { bootstrap, mount, unmount } = lifecycles;
