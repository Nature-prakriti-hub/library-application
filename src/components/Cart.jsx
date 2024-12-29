import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  // Update cart items whenever the local storage changes
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  // Handle removing a book from the cart
  const handleRemoveBook = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // Handle changing quantity of a book
  const handleChangeQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) => 
      item.id === id ? { ...item, quantity } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // Calculate total cost, GST, and total price
  const totalCost = cartItems.reduce((total, item) => total + parseInt(item.cost.replace('₹', '')) * item.quantity, 0);
  const gst = totalCost * 0.18; // 18% GST
  const totalPrice = totalCost + gst;

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
          <thead>
            <tr>
              <th>Remove</th>
              <th>Sr. No</th>
              <th>Book Name</th>
              <th>Cost</th>
              <th>Quantity</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((book, index) => {
              const bookTotalCost = parseInt(book.cost.replace('₹', '')) * book.quantity;

              return (
                <tr key={book.id}>
                  <td>
                    <input 
                      type="checkbox" 
                      onChange={() => handleRemoveBook(book.id)} 
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>{book.name}</td>
                  <td>{book.cost}</td>
                  <td>
                    <select 
                      value={book.quantity} 
                      onChange={(e) => handleChangeQuantity(book.id, parseInt(e.target.value))}
                    >
                      {[...Array(10).keys()].map((num) => (
                        <option key={num} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>₹{bookTotalCost}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {cartItems.length === 0 ? (
        <p></p>
      ) : (
      <div>
        <p><strong>Total Cost: </strong>₹{totalCost}</p>
        <p><strong>GST (18%): </strong>₹{gst.toFixed(2)}</p>
        <p><strong>Total Price to Pay: </strong>₹{totalPrice.toFixed(2)}</p>
        <button onClick={() => alert("Proceeding to Payment...")}>Pay Now</button>
      </div>
      )}
    </div>
  );
};

export default Cart;
