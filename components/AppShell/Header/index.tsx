import { Text, Header } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { BiBook, BiStar } from 'react-icons/bi';

import NavbarOption from '../Navbar/NavbarOption';

function Head() {
	const { width } = useViewportSize();

	return (
		<Header
			fixed
			height={60}
			className="flex items-center justify-between px-[50px] xs:px-[5px] sm:px-[10px] md:px-[15px]"
		>
			<Text className="font-bold text-xl">Book Store</Text>
			<div className="flex items-center justify-between w-auto md:opacity-100 lg:opacity-0 xl:opacity-0 2xl:opacity-0">
				<NavbarOption
					icon={<BiBook />}
					label={width >= 1024 ? 'Books' : ''}
					color={'blue'}
					link={'/books'}
				/>
				<NavbarOption
					icon={<BiStar />}
					label={width >= 1024 ? 'Favorites' : ''}
					color={'orange'}
					link={'/favorites'}
				/>
			</div>
		</Header>
	);
}

export default Head;
