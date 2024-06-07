import React, { useState } from 'react';
import UpdateBookForm from './UpdateBookForm';
import DeleteBookButton from './DeleteBookButton';
import { Book } from './types';

interface BookComponentProps {
  book: Book;
  onUpdate: () => void; // Add onUpdate prop
  onDelete: () => void; // Add onDelete prop
}

const BookComponent: React.FC<BookComponentProps> = ({ book, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  // console.log("Book: ",book)
  // Placeholder function for updating a book
  const handleUpdate = () => {
    console.log("Update book functionality will be implemented here.");
    onUpdate(); // Call onUpdate function
  };

  // Placeholder function for deleting a book
  const handleDelete = () => {
    console.log("Delete book functionality will be implemented here.");
    onDelete(); // Call onDelete function
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      {isEditing ? (
        <UpdateBookForm book={book} onUpdate={handleUpdate} onClose={() => setIsEditing(false)} />
      ) : (
        <div>
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <p className="text-gray-600">Author: {book.author}</p>
          <div className="mt-4 flex space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <DeleteBookButton bookId={book.id} onDelete={handleDelete} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookComponent;
