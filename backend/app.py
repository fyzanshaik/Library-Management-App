from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

# Database connection configuration
DATABASE_URL = ""
conn = psycopg2.connect(DATABASE_URL, sslmode='require')

# Routes
@app.route('/api/books', methods=['GET'])
def get_books():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM books;")
    books = cursor.fetchall()
    cursor.close()
    # Convert the list of books to a list of dictionaries
    books_dict = []
    for book in books:
        book_dict = {
            'id': book[0],
            'title': book[1],
            'author': book[2]
        }
        books_dict.append(book_dict)
    return jsonify(books_dict), 200

@app.route('/api/books', methods=['POST'])
def add_book():
    data = request.json
    title = data.get('title')
    author = data.get('author')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO books (title, author) VALUES (%s, %s);", (title, author))
    conn.commit()
    cursor.close()
    return jsonify(message='Book added successfully'), 201

@app.route('/api/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    cursor = conn.cursor()
    cursor.execute("DELETE FROM books WHERE id = %s;", (book_id,))
    conn.commit()
    cursor.close()
    return jsonify(message='Book deleted successfully'), 200

@app.route('/api/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    data = request.json
    title = data.get('title')
    author = data.get('author')
    cursor = conn.cursor()
    cursor.execute("UPDATE books SET title = %s, author = %s WHERE id = %s;", (title, author, book_id))
    conn.commit()
    cursor.close()
    return jsonify(message='Book updated successfully'), 200



if __name__ == '__main__':
    app.run(port=8000, debug=True)
