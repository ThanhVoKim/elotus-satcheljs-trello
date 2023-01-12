import React from 'react';
import { NAVBAR_ROUTES } from '../../constants';

import './navbar.style.scss';

export const prefixClassName = 'navbar';

export const Navbar = () => {
	return (
		<div className={`${prefixClassName}__header`}>
			<nav className={`${prefixClassName}__nav container`}>
				<ul className={`${prefixClassName}__nav-list`}>
					{NAVBAR_ROUTES.map((route) => (
						<li key={route.name} className={`${prefixClassName}__nav-item`}>
							<a className={`${prefixClassName}__nav-link`} href={route.path}>
								{route.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
