import React, { useState } from 'react';

const Book = () => {
  const [books, setBooks] = useState([
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ]);

  const deleteBook = (bookId) => {
    setBooks(books.filter((book) => book.item_id !== bookId));
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.category}</p>
            <button type="button" onClick={() => deleteBook(book.item_id)}>Delete Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
