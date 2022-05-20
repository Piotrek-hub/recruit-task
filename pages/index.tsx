import type { NextPage } from 'next';
import Head from 'next/head';
import Shell from '../components/AppShell';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Shell />
		</div>
	);
};

export default Home;
