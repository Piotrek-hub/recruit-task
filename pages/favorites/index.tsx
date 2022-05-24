import type { NextPage } from 'next';
import Head from 'next/head';
import Shell from '../../components/AppShell';

import FavoritesComponent from '../../components/Views/Favorites';

const Favorites: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Favorites</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Shell>
				<FavoritesComponent />
			</Shell>
		</div>
	);
};

export default Favorites;
