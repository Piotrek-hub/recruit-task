import { Text, Header } from '@mantine/core';

function Head() {
	return (
		<Header fixed height={60} p="md">
			<Text className="font-bold text-xl">Book Store</Text>
		</Header>
	);
}

export default Head;
