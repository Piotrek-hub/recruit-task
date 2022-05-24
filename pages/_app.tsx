import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import store from '../redux/store';

import { MantineProvider } from '@mantine/core';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<MantineProvider>
				<Component {...pageProps} />
			</MantineProvider>
		</Provider>
	);
}

export default MyApp;
