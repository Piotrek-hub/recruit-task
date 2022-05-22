import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { BookInterface } from '../utils/interfaces';

interface BookSliceInterface {
	favorites: string[];
	books: BookInterface[];
}

const initialState: BookSliceInterface = {
	favorites: [],
	books: [],
};

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		addFavorites: (state, action: any) => {
			state.favorites = [...state.favorites, action.payload];
		},
	},
});

export const { addFavorites } = booksSlice.actions;

export const selectFavorites = (state: RootState) => state.books.favorites;

export default booksSlice.reducer;
