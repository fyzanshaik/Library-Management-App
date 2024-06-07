import React from 'react';
import BookComponent from './Book'; // Corrected import path
import { Book } from './types';

interface BookListProps {
  books: Book[];
  onUpdate: () => void; // Add onUpdate prop
  onDelete: () => void; // Add onDelete prop
}

const BookList: React.FC<BookListProps> = ({ books, onUpdate, onDelete }) => {
  if (!Array.isArray(books)) {
    return <div>Error: Books data is not in the expected format</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {books.map(book => (
        <BookComponent key={book.id} book={book} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
};


export default BookList;
