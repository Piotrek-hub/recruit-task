import { BookInterface, GutenbergResponse } from './interfaces';

async function getBooks(title?: string): Promise<BookInterface[]> {
	const uri = title
		? `https://gnikdroy.pythonanywhere.com/api/book/?agent_alias_contains=&agent_birth_date_range_max=&agent_birth_date_range_min=&agent_death_date_range_max=&agent_death_date_range_min=&agent_name_contains=&agent_webpage_contains=&description_contains=&downloads_range_max=&downloads_range_min=&format=json&has_agent_type=&has_bookshelf=&has_resource_type=&languages=&title_contains=${title}&type=`
		: 'https://gnikdroy.pythonanywhere.com/api/book/?format=json';

	console.log(uri);

	const books = await fetch(uri)
		.then((res) => res.json())
		.then((data: GutenbergResponse) => {
			return data.results;
		});

	return books;
}

export { getBooks };
