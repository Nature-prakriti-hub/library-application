import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/categories');
  };

  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <div className="list">
        <h3>Why Choose LIBWORLD?</h3>
        <ul>
          <li className="list-item">Extensive Book Collection: We offer a vast collection of books across various genres, including fiction, non-fiction, and educational books.</li>
          <li className="list-item">Affordable Pricing: Get your favorite books at competitive prices, with occasional discounts and special offers.</li>
          <li className="list-item">Easy Browsing: Our user-friendly interface helps you find books quickly, whether by genre, author, or title.</li>
          <li className="list-item">Fast and Secure Checkout: Enjoy a seamless checkout process with multiple payment options, including credit cards, debit cards, and e-wallets.</li>
          <li className="list-item">Free Delivery: We offer free delivery for orders above a certain amount, ensuring you can enjoy your books without worrying about extra charges.</li>
          <li className="list-item">Personalized Recommendations: Based on your reading history, we recommend books that match your interests, helping you discover new reads.</li>
          <li className="list-item">Book Reviews and Ratings: Read reviews from other customers to make informed decisions before purchasing your next book.</li>
          <li className="list-item">24/7 Customer Support: Our dedicated support team is available round-the-clock to assist you with any inquiries or issues you may face.</li>
          <li className="list-item">Book Previews: Before making a purchase, you can preview chapters of books to make sure they meet your expectations.</li>
          <li className="list-item">Community Engagement: Join our growing community of book lovers, share your reviews, and participate in online book clubs and discussions.</li>
        </ul>
      </div>

      <button className="explore-button" onClick={handleExploreClick}>
        Start Exploring Books
      </button>
    </div>
  );
};

export default AboutUs;