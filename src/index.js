import 'react-hot-loader/patch';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './Root.jsx';

const root = document.getElementById('react-root');

const renderWithHot = Component => {
	render(
		<AppContainer>
			<Component />
		</AppContainer>,
		root
	);
};

renderWithHot(Root);

if (module.hot) {
	module.hot.accept('./Root.jsx', () => {
		renderWithHot(require('./Root.jsx').default);
	});
}
