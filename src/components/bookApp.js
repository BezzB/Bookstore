import React from 'react';
import Forms from '../redux/bookForm';
import BookList from '../redux/bookList';

function Books() {
  return (
    <div>
      <BookList />
      <Forms />
    </div>
  );
}

export default Books;
