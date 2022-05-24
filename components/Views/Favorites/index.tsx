import { Title, Text, Space, Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import { BookInterface } from '../../../utils/interfaces';

import { useAppSelector } from '../../../hooks/redux';
import Book from '../../Book';
import { useRouter } from 'next/router';

function Favourites() {
	const favorites = useAppSelector((state: any) => state.books.favorites);
	const [books, setBooks] = useState<Array<BookInterface>>([]);

	const router = useRouter();

	useEffect(() => {
		const books: BookInterface[] = [];
		favorites.map(async (id: number) => {
			const book = await fetch(
				`https://gnikdroy.pythonanywhere.com/api/book/${id}`
			).then((resp) => resp.json());

			books.push(book);

			if (books.length == favorites.length) {
				setBooks(books);
			}
		});
	}, []);

	return (
		<div className="w-full">
			<Title order={1} p="md">
				Your Favorites books
			</Title>
			{books?.length > 0 ? (
				<div className="grid grid-cols-4 gap-2 mx-auto mt-[50px]">
					{books?.map((book: BookInterface) => (
						<Book
							id={book.id}
							title={book.title}
							subjects={book.subjects}
							languages={book.languages}
							resources={book.resources}
						/>
					))}
				</div>
			) : (
				<div className="ml-10">
					<Text>You dont have any favorites yet</Text>
					<Button
						className="mt-2"
						variant="light"
						color="grape"
						compact
						onClick={() => {
							router.push('/books');
						}}
					>
						<Text underline>Explore books here</Text>
					</Button>
				</div>
			)}
		</div>
	);
}

export default Favourites;
