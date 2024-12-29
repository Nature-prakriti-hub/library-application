import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BuyNow = () => {
  const { state } = useLocation(); // Get the selected book from state
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(state?.selectedBook || {});
  const [quantity, setQuantity] = useState(1); // Start with quantity 1
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    setSelectedBook(state?.selectedBook || {});
  }, [state]);

  // Convert cost string (₹750) to number (750)
  const getNumericCost = (cost) => {
    return parseInt(cost.replace('₹', '').replace(',', ''));
  };

  // Handle removing the book from the cart when quantity is 0
  const handleChangeQuantity = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);

    // If quantity is 0, remove the book from the cart
    if (newQuantity === 0) {
      removeFromCart(selectedBook.id);
    }
  };

  // Handle removing a book from the cart
  const removeFromCart = (bookId) => {
    const updatedCart = cartItems.filter(item => item.id !== bookId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);

    // If the cart is empty, display the empty cart message
    if (updatedCart.length === 0) {
      alert("Cart is empty");
    }
  };

  // Calculate total cost, GST, and total price based on quantity
  const totalCost = getNumericCost(selectedBook?.cost || '₹0') * quantity;
  const gst = totalCost * 0.18;  // 18% GST
  const totalPrice = totalCost + gst;

  return (
    <div>
      <h2>Buy Now - Single Book</h2>

      {/* Render the table only if the quantity is greater than 0 */}
      {quantity > 0 ? (
        <div>
          <table border="1" style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Book Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr key={selectedBook.id}>
                <td>1</td>
                <td>{selectedBook.name}</td>
                <td>{selectedBook.cost}</td>
                <td>
                  <select
                    value={quantity}
                    onChange={handleChangeQuantity}
                    style={{ width: '60px' }}
                  >
                    {[...Array(11).keys()].map(num => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Display cost details */}
          <div>
            <p><strong>Total Cost: </strong>₹{totalCost}</p>
            <p><strong>GST (18%): </strong>₹{gst.toFixed(2)}</p>
            <p><strong>Total Price to Pay: </strong>₹{totalPrice.toFixed(2)}</p>
            <button onClick={() => alert("Proceeding to Payment...")}>Pay Now</button>
          </div>
        </div>
      ) : (
        // If quantity is 0, show the "Cart is Empty" message and hide the table
        <div>
          <p>Your cart is empty.</p>
        </div>
      )}
    </div>
  );
};

export default BuyNow;
