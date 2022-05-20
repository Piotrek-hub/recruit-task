import { Navbar } from '@mantine/core';
import NavbarOption from './NavbarOption';

import { BiBook, BiStar, BiBookOpen, BiSearch } from 'react-icons/bi';

function Nav() {
	return (
		<Navbar className="h-fill w-[13%]" p="sm">
			<Navbar.Section grow mt="xs">
				<NavbarOption
					icon={<BiBook />}
					label={'Books'}
					color={'blue'}
				/>
				<NavbarOption
					icon={<BiStar />}
					label={'Favorite'}
					color={'orange'}
				/>
				<NavbarOption
					icon={<BiBookOpen />}
					label={'Reading'}
					color={'pink'}
				/>
			</Navbar.Section>
		</Navbar>
	);
}

export default Nav;
