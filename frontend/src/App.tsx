import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import { Book } from './components/types';

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleUpdate = async () => {
    await fetchBooks();
  };

  const handleDelete = async () => {
    await fetchBooks();
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <AddBookForm onAdd={fetchBooks} />
      <BookList books={books} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
};

export default App;
