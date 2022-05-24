import { useEffect, useState } from 'react';

import { Button, Input, Title, Text } from '@mantine/core';
import { BiSearch } from 'react-icons/bi';

import { fetchBooks } from '../../../utils/api';
import { BookInterface } from '../../../utils/interfaces';

import Book from '../../Book';

function Books() {
	const [books, setBooks] = useState<BookInterface[]>();
	const [input, setInput] = useState<string>('');

	useEffect(() => {
		handleSearch();
	}, [input]);

	const handleSearch = () => {
		fetchBooks(input).then((books: BookInterface[]) => setBooks(books));
	};

	return (
		<div className="w-full">
			<Title order={1} p="md">
				Let's explore some books
			</Title>
			<div className="flex w-fill">
				<Input
					icon={<BiSearch />}
					placeholder="Book's Name"
					size="md"
					className="w-full"
					value={input}
					onChange={(e: { target: { value: string } }) => {
						setInput(e.target.value);
					}}
				/>
				<Button
					size="md"
					color="teal"
					variant="outline"
					// onClick={handleSearch}
				>
					Search
				</Button>
			</div>
			{books?.length == 0 ? (
				<Text className="text-xl mt-10" color="red">
					Books not found
				</Text>
			) : (
				<Text className="text-xl mt-10">
					Books found:
					<span className="font-bold">{books?.length}</span>
				</Text>
			)}

			<div className="grid grid-cols-4 gap-2 mx-auto mt-[50px]">
				{books?.map((book: BookInterface) => (
					<Book
						key={book.id}
						id={book.id}
						title={book.title}
						subjects={book.subjects}
						languages={book.languages}
						resources={book.resources}
					/>
				))}
			</div>
		</div>
	);
}

export default Books;
