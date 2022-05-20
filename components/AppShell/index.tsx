import { AppShell } from '@mantine/core';

import Navbar from './Navbar';
import Header from './Header';
import React from 'react';

type Props = {
	children: JSX.Element;
};

function Shell({ children }: Props) {
	return (
		<AppShell navbar={<Navbar />} header={<Header />} className="h-screen">
			{children}
		</AppShell>
	);
}
export default Shell;
