import React, { useState } from 'react';
import axios from 'axios';
import { Book } from './types';
interface UpdateBookFormProps {
  book: Book;
  onUpdate: () => void;
  onClose: () => void;
}

const UpdateBookForm: React.FC<UpdateBookFormProps> = ({ book, onUpdate, onClose }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/books/${book.id}`, { title, author });
      onUpdate();
      onClose();
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1">Author</label>
        <input
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex space-x-2">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Update
        </button>
        <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateBookForm;
