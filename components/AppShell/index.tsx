import { AppShell } from '@mantine/core';

import Navbar from './Navbar';
import Header from './Header';

function Shell() {
	return (
		<AppShell navbar={<Navbar />} header={<Header />} className="h-screen">
			asd
		</AppShell>
	);
}
export default Shell;
