import React from 'react';
import axios from 'axios';

interface DeleteBookButtonProps {
  bookId: number;
  onDelete: () => void;
}

const DeleteBookButton: React.FC<DeleteBookButtonProps> = ({ bookId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/books/${bookId}`);
      onDelete();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteBookButton;
