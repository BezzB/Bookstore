import React, { useState } from 'react';

function Book() {
  const [book, setBook] = useState({
    title: 'The Book Title',
    author: 'The Book Author',
  });

  const deleteBook = () => {
    setBook({
      title: '',
      author: '',
    });
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button type="button" onClick={deleteBook}>Delete Book</button>
    </div>
  );
}

export default Book;
