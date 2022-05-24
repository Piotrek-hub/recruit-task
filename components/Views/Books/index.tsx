import { useEffect, useState } from 'react';

import { Button, Input, Title, Text, Pagination } from '@mantine/core';
import { BiSearch } from 'react-icons/bi';

import { BookInterface } from '../../../utils/interfaces';

import Book from '../../Book';

function Books() {
	const [books, setBooks] = useState<BookInterface[]>();
	const [input, setInput] = useState<string>('');
	const [activePage, setPage] = useState(1);

	const handlePaginationChange = (page: any) => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setPage(page);
	};

	useEffect(() => {
		fetch(
			`https://gnikdroy.pythonanywhere.com/api/book/?page=${activePage}&format=json`
		)
			.then((res) => res.json())
			.then((data: { results: BookInterface[] }) => {
				setBooks(data.results);
			});
	}, [activePage]);

	const handleSearch = () => {
		fetch(
			`https://gnikdroy.pythonanywhere.com/api/book/?type=&title_contains=${input}`
		)
			.then((res) => res.json())
			.then((data: { results: BookInterface[] }) => {
				setBooks(data.results);
			});
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
					onClick={handleSearch}
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
			<div className="flex align-center justify-around">
				<Pagination
					className="py-10 "
					page={activePage}
					onChange={handlePaginationChange}
					total={6578}
					color="dark"
					size="xl"
					radius="xs"
					siblings={2}
				/>
			</div>
		</div>
	);
}

export default Books;
