import React from 'react';
import '../App.css';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = [
    {
      genre: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      chapter: 'Chapter 17',
      percentage: '64%',
    },
    {
      genre: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      chapter: 'Chapter 3: A lesson Learned',
      percentage: '8%',
    },
  ];

  return (

    <div className="book">
      <div className="book-section">

        {books.map((book) => (
          <Book key={book.title} book={book} />
        ))}

        <AddBook />
      </div>
    </div>
  );
};

export default Books;
