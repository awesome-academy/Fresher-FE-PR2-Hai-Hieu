/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import App from './App';
import i18n from './i18n';
import store from './redux/store';
import 'antd/dist/antd.css';
import './assets/scss/index.scss';
ReactDOM.render(
	<Provider store={store}>
		<I18nextProvider i18n={i18n}>
			<App />
		</I18nextProvider>
	</Provider>,
	document.getElementById('root'),
);
