import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HmMHRZm3hzkbkXocyOma/books';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await axios.get(API_URL);
      const booksArr = Object.keys(response.data).map((key) => ({
        item_id: key,
        ...response.data[key][0],
      }));
      return booksArr;
    } catch (error) {
      return error;
    }
  },
);

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  await axios.post(API_URL, {
    item_id: Date.now().toString(),
    title: book.title,
    author: book.author,
    category: book.category,
  });
  return book;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const initialState = {
  books: [],
  isLoading: false,
  isError: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = 'failed';
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addBook.rejected, (state) => {
        state.status = 'failed';
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const bookId = action.payload;
        state.books = state.books.filter((book) => book.item_id !== bookId);
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(removeBook.rejected, (state) => {
        state.status = 'failed';
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default booksSlice.reducer;
