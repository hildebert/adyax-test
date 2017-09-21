// import 'bootstrap/dist/css/bootstrap.min.css';
import 'style/main.scss';

import {Provider} from 'react-redux';
import createStore from 'redux/createStore';

import React from 'react';
import Main from 'containers/Main';

const store = createStore(window.initialState || {});

export default class RootContainer extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Main />
			</Provider>
		);
	}
}
