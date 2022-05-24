import '../styles/globals.css';
import type { AppProps } from 'next/app';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';

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
