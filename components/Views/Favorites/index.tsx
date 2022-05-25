import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../../hooks/redux';

import { Title, Text, Button } from '@mantine/core';

import { BookInterface } from '../../../types/interfaces';
import Book from '../../Book';

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
	}, [favorites]);

	return (
		<div className="w-full pl-[15%] pt-[3%]">
			<Title order={1} p="md">
				Your Favorites books: {books.length}
			</Title>
			{books?.length > 0 ? (
				<div className="container grid grid-cols-4 gap-2 mx-auto mt-[50px] space-y-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
					{books?.map(
						(book: BookInterface) =>
							book !== undefined && (
								<Book
									key={book.id}
									id={book.id}
									title={book.title}
									subjects={book.subjects}
									languages={book.languages}
									resources={book.resources}
								/>
							)
					)}
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
