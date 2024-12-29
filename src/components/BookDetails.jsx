import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const bookDetails = {
    1: { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A classic novel.', cost: '$10' },
    2: { name: '1984', author: 'George Orwell', description: 'A dystopian novel.', cost: '$12' },
    // Add more books as needed
  };

  const book = bookDetails[bookId];

  return (
    <div>
      <h2>{book.name}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Cost:</strong> {book.cost}</p>
      <button onClick={() => navigate('/cart')}>Buy Now</button>
      <button onClick={() => navigate('/cart')}>Add to Cart</button>
    </div>
  );
};

export default BookDetails;
