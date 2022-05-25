import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addFavorites, removeFavoites } from '../../redux/booksSlice';

import { Card, Image, Text, Badge, Button } from '@mantine/core';
import { BiStar } from 'react-icons/bi';

import { BookComponentInterface } from '../../types/interfaces';

function Book({ id, title, subjects, resources }: BookComponentInterface) {
	const [image, setImage] = useState<string>();
	const [readUri, setReadUri] = useState<string>();

	const favorites = useAppSelector((state) => state.books.favorites);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const uris = resources.filter(
			(resource) =>
				resource.type == 'image/jpeg' && resource.uri.includes('medium')
		);
		if (uris.length >= 1) {
			setImage(uris[0].uri);
		} else {
			setImage(
				'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'
			);
		}
	}, []);

	useEffect(() => {
		const uris = resources.filter(
			(resource) =>
				(resource.type.includes('text/html') ||
					resource.type.includes('text/plain')) &&
				(resource.uri.includes('.htm') || resource.uri.includes('.txt'))
		);
		if (uris.length > 1) {
			if (uris[0].uri.includes('.htm')) setReadUri(uris[0].uri);
			else setReadUri(uris[1].uri);
		} else if (uris.length === 1) {
			setReadUri(uris[0].uri);
		} else {
			setReadUri(
				'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'
			);
		}
	}, []);

	const handleFavoritesButton = () => {
		if (!favorites.includes(id)) dispatch(addFavorites(id));
		else dispatch(removeFavoites(id));
	};

	return (
		<div style={{ width: 340, margin: 'auto' }}>
			<Card shadow="lg">
				<Card.Section>
					<Image src={image} className="p-6" alt="Book image" />
				</Card.Section>
				<Text className="my-[20px] font-bold text-lg">{title}</Text>

				<div>
					{subjects.map((subject: string) => (
						<Badge key={subject} color="pink" variant="light">
							{subject}
						</Badge>
					))}
				</div>
				<div className="mt-6">
					<a href={readUri} target="_blank" rel="noreferrer">
						<Button
							variant="outline"
							color="blue"
							className="w-1/2"
						>
							Read
						</Button>
					</a>
					<Button
						variant="light"
						color="red"
						className="w-1/3 ml-10"
						onClick={handleFavoritesButton}
					>
						<BiStar />
					</Button>
				</div>
			</Card>
		</div>
	);
}

export default Book;
