import React from 'react';
import '../App.css';
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
          <div key={book.title} className="book-section-one">
            <div className="genre-section">
              <span>{book.genre}</span>
              <div className="book-title">
                <h2>{book.title}</h2>
              </div>
              <p>{book.author}</p>
              <div className="updatebook">
                <button type="button" id="comment">Comment</button>
                <div className="left-section-1" />
                <button type="button" id="remove">Remove</button>
                <div className="left-section-1" />
                <button type="button" id="edit">Edit</button>
              </div>
            </div>
            <div className="progress">
              <div
                className="prt"
                style={{
                  '--clr': 'rgb(59, 59, 245)',
                  '--num': 65,
                }}
              >
                <svg>
                  <circle cx={70} cy={70} r={70} />
                  <circle cx={70} cy={70} r={70} />
                </svg>
              </div>
              <div className="output">
                <h3>{book.percentage}</h3>
                <span>Completed</span>
              </div>
            </div>
            <div className="left-section-2" />

            <div className="update-progress">
              <span>Current Chapter</span>
              <h4>{book.chapter}</h4>

              <button type="button">Update Progress</button>

            </div>
          </div>
        ))}

        <AddBook />
      </div>
    </div>
  );
};

export default Books;
