import React from 'react';
import Book from './Book';

const BooksList = () => {
  const books = [
    {
      title: 'The Book Title 1',
      author: 'The Book Author 1',
    },
    {
      title: 'The Book Title 2',
      author: 'The Book Author 2',
    },
    {
      title: 'The Book Title 3',
      author: 'The Book Author 3',
    },
  ];

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} />
        </li>
      ))}
    </ul>
  );
};

export default BooksList