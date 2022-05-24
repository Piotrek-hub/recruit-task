import { BookInterface, GutenbergResponse } from './interfaces';

async function fetchBooks(title?: string): Promise<BookInterface[]> {
	const uri = title
		? `https://gnikdroy.pythonanywhere.com/api/book/?type=&languages=&title_contains=${title}&description_contains=&downloads_range_min=&downloads_range_max=&has_bookshelf=&has_resource_type=&has_agent_type=&agent_name_contains=&agent_alias_contains=&agent_webpage_contains=&agent_birth_date_range_min=&agent_birth_date_range_max=&agent_death_date_range_min=&agent_death_date_range_max=`
		: 'https://gnikdroy.pythonanywhere.com/api/book/?format=json';

	const books = await fetch(uri)
		.then((res) => res.json())
		.then((data: GutenbergResponse) => {
			return data.results;
		});

	return books;
}

export { fetchBooks };
