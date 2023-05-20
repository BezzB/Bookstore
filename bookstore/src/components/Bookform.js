import React, { useState } from 'react';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add book to database
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={setTitle} />
      <input type="text" placeholder="Author" value={author} onChange={setAuthor} />
      <button type="submit">Create Book</button>
    </form>
  );
};

export default BookForm;
