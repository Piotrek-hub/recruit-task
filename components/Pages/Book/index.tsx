import { Card, Image, Group, Text, Badge, Button } from '@mantine/core';

import { useEffect, useState } from 'react';
import { BiStar } from 'react-icons/bi';
import { Resource } from '../../../utils/interfaces';
import { useDispatch } from 'react-redux';
import { addFavorites } from '../../../redux/booksSlice';
interface BookComponentInterface {
	id: number;
	title: string;
	subjects: string[];
	languages: string[];
	resources: Resource[];
}

function Book({
	id,
	title,
	subjects,
	languages,
	resources,
}: BookComponentInterface) {
	const [image, setImage] = useState<string>();
	const dispatch = useDispatch();
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

	const addToFavorites = () => {
		dispatch(addFavorites(id));
	};

	return (
		<div style={{ width: 340, margin: 'auto' }}>
			<Card shadow="lg">
				<Card.Section>
					<Image
						src={image}
						className="h-auto p-6"
						alt="Book image"
					/>
				</Card.Section>
				<Text className="my-[20px] font-bold text-lg">{title}</Text>

				<div>
					{subjects.map((subject: string) => (
						<Badge color="pink" variant="light">
							{subject}
						</Badge>
					))}
				</div>
				<div className="mt-6">
					<Button variant="outline" color="blue" className="w-1/2">
						Read
					</Button>
					<Button
						variant="light"
						color="red"
						className="w-1/3 ml-10"
						onClick={addToFavorites}
					>
						<BiStar />
					</Button>
				</div>
			</Card>
		</div>
	);
}

export default Book;
