import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import '../App.css';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const { books, isLoading, isError } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (

    <div className="book">
      <div className="book-section">

        { books.map((book) => (
          <Book
            key={book.item_id}
            book={book}
          />
        ))}

        <AddBook />
      </div>
    </div>
  );
};

export default Books;
