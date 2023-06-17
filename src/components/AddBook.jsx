import React from 'react';
import '../App.css';

const AddBook = () => (
  <div className="addBook-container">
    <div className="hl" />
    <h2>ADD NEW BOOK</h2>
    <div className="addBook-content">
      <input className="input-text" type="text" placeholder="Book title" />
      <input className="author-input" type="text" placeholder="Author" />
      <button type="button" className="addBtn">Add Book</button>

    </div>

  </div>
);

export default AddBook;
