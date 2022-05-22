import { Input, Title } from '@mantine/core';
import { BiSearch } from 'react-icons/bi';

function Books() {
	return (
		<div className="w-full">
			<Title order={1} p="md">
				Let's explore some books
			</Title>
			<div>
				{/* #TODO: Filtry */}
				<Input
					icon={<BiSearch />}
					placeholder="Book's Name"
					size="md"
				/>
			</div>
		</div>
	);
}

export default Books;
