import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom'; // For React 17
import { createRoot } from 'react-dom/client'; // For React 18
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import './styles/styles.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/themeContext';
import { AuthContextProvider } from './contexts/authContext';
import './i18n';

const children = (
	<Provider store={store}>
		<AuthContextProvider>
			<ThemeContextProvider>
				<Router>
					<React.StrictMode>
						<PersistGate persistor={persistor}>
							<Suspense>
								<App />
							</Suspense>
						</PersistGate>
					</React.StrictMode>
				</Router>
			</ThemeContextProvider>
		</AuthContextProvider>
	</Provider>
);

const container = document.getElementById('root');

// ReactDOM.render(children, container); // For React 17
createRoot(container as Element).render(children); // For React 18

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
