import { Navbar } from '@mantine/core';
import NavbarOption from './NavbarOption';

import { BiBook, BiStar } from 'react-icons/bi';

function Nav() {
	return (
		<Navbar className="h-fill w-[13%]" p="sm">
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
