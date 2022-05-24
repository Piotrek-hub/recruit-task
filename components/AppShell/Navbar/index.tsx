import { Navbar } from '@mantine/core';
import { BiBook, BiStar } from 'react-icons/bi';

import NavbarOption from './NavbarOption';

function Nav() {
	return (
		<Navbar fixed className="h-screen w-[15%]" p="sm">
			<Navbar.Section grow mt="xs">
				<NavbarOption
					icon={<BiBook />}
					label={'Books'}
					color={'blue'}
					link={'/books'}
				/>
				<NavbarOption
					icon={<BiStar />}
					label={'Favorites'}
					color={'orange'}
					link={'/favorites'}
				/>
			</Navbar.Section>
		</Navbar>
	);
}

export default Nav;
