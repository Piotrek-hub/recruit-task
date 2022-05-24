import { Title, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { BookInterface } from '../../../utils/interfaces';

import { useAppSelector } from '../../../hooks/redux';
import Book from '../../Book';

function Favourites() {
	const favorites = useAppSelector((state: any) => state.books.favorites);
	const [books, setBooks] = useState<Array<BookInterface>>([]);

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

	useEffect(() => {
		console.log(books);
	}, [books]);

	const fetchBooks = () => {};

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
				<Text className="ml-10">You dont have any favorites yet</Text>
			)}
		</div>
	);
}

export default Favourites;
