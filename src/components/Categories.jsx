import React from 'react';
import { useNavigate } from 'react-router-dom';
import fictionImage from '../images/fiction.jpg';
import programmingImage from '../images/technology.jpg';
import scienceImage from '../images/science.jpg';
import historyImage from '../images/history.jpg';
import artImage from '../images/art.jpg';
import travelImage from '../images/travel.jpg';
import biographyImage from '../images/biography.jpg';
import selfHelpImage from '../images/self-help.jpg';
import mysteryImage from '../images/mystery.jpg';
import fantasyImage from '../images/fantasy.jpg';
// import poetryImage from '../images/poetry.jpg';
import cookingImage from '../images/cookbooks.jpg';
import businessImage from '../images/business.jpg';
// import spiritualityImage from '../images/spirituality.jpg';
import romanceImage from '../images/romance.jpg';
// import thrillerImage from '../images/thriller.jpg';
import childrenImage from '../images/children.jpg';
import technologyImage from '../images/technology.jpg';
import healthImage from '../images/health.jpg';
import sportsImage from '../images/sports.jpg';
import educationImage from '../images/education.jpg';
import comicsImage from '../images/comics.jpg';
// import adventureImage from '../images/adventure.jpg';
// import horrorImage from '../images/horror.jpg';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, title: 'Fiction', image: fictionImage, description: 'Explore a wide range of fiction books.' },
    { id: 2, title: 'Programming', image: programmingImage, description: 'Learn programming with these books.' },
    { id: 3, title: 'Science', image: scienceImage, description: 'Discover the wonders of science.' },
    { id: 4, title: 'History', image: historyImage, description: 'Dive into historical events and stories.' },
    { id: 5, title: 'Art', image: artImage, description: 'Appreciate the beauty of art.' },
    { id: 6, title: 'Travel', image: travelImage, description: 'Explore travel guides and adventures.' },
    { id: 7, title: 'Biography', image: biographyImage, description: 'Read about inspiring lives.' },
    { id: 8, title: 'Self-Help', image: selfHelpImage, description: 'Improve your life with these books.' },
    { id: 9, title: 'Mystery', image: mysteryImage, description: 'Uncover thrilling mysteries.' },
    { id: 10, title: 'Fantasy', image: fantasyImage, description: 'Immerse yourself in magical worlds.' },
    // { id: 11, title: 'Poetry', image: poetryImage, description: 'Find inspiration in poetic verses.' },
    { id: 12, title: 'Cooking', image: cookingImage, description: 'Master the art of cooking.' },
    { id: 13, title: 'Business', image: businessImage, description: 'Learn the secrets of successful businesses.' },
    // { id: 14, title: 'Spirituality', image: spiritualityImage, description: 'Connect with your spiritual side.' },
    { id: 15, title: 'Romance', image: romanceImage, description: 'Fall in love with romantic stories.' },
    // { id: 16, title: 'Thriller', image: thrillerImage, description: 'Experience heart-pounding suspense.' },
    { id: 17, title: 'Children', image: childrenImage, description: 'Delight the young readers.' },
    { id: 18, title: 'Technology', image: technologyImage, description: 'Stay updated with tech innovations.' },
    { id: 19, title: 'Health & Wellness', image: healthImage, description: 'Prioritize your health and wellbeing.' },
    { id: 20, title: 'Sports', image: sportsImage, description: 'Engage with books about sports and fitness.' },
    { id: 21, title: 'Education', image: educationImage, description: 'Expand your knowledge base.' },
    // { id: 22, title: 'Comics', image: comicsImage, description: 'Enjoy a world of comic adventures.' },
    // { id: 23, title: 'Adventure', image: adventureImage, description: 'Embark on thrilling adventures.' },
    // { id: 24, title: 'Horror', image: horrorImage, description: 'Face spine-chilling horrors.' },
  ];

  const styles = {
    container: { padding: '40px', minHeight: '250vh', overflowY: 'auto', marginTop: '-60px' }, // Adjusted height for smaller screens
    heading: { textAlign: 'center', fontSize: '2rem', marginBottom: '20px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' },
    card: {
      border: '1px solid #ddd',
      borderRadius: '10px',
      overflow: 'hidden',
      textAlign: 'center',
      padding: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
    },
    image: { width: '100%', height: '150px', objectFit: 'cover' },
    title: { fontSize: '1.5rem', margin: '10px 0' },
    description: { fontSize: '1rem', color: '#555' },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Categories</h2>
      <div style={styles.grid}>
        {categories.map((category) => (
          <div
            key={category.id}
            style={styles.card}
            onClick={() => navigate(`/category/${category.title.toLowerCase()}`)}
          >
            <img src={category.image} alt={category.title} style={styles.image} />
            <h3 style={styles.title}>{category.title}</h3>
            <p style={styles.description}>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
