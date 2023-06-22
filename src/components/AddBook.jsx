import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../App.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');

  const handleAddBook = async () => {
    if (title.trim() === '' || author.trim() === '') {
      return;
    }
    dispatch(
      addBook({
        item_id: Date.now().toString(),
        title,
        author,
        category,
      }),
    );
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="addBook-container">
      <div className="hl" />
      <h2>ADD NEW BOOK</h2>
      <div className="addBook-content">
        <input
          className="input-text"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="author-input"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="button" className="addBtn" onClick={handleAddBook}>Add Book</button>

      </div>

    </div>
  );
};

export default AddBook;
