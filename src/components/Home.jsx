import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import image1 from '../images/art.jpg';
import image2 from '../images/biography.jpg';
import image3 from '../images/business.jpg';
import image4 from '../images/children.jpg'; // Fixed missing closing quote
import image5 from '../images/comics.jpg';
import image6 from '../images/cookbooks.jpg';
import image7 from '../images/economics.jpg';
import image8 from '../images/education.jpg';
import image9 from '../images/fiction.jpg';
import './Home.css';

const Home = () => {
  const featuredBooks = [
    {
      id: 1,
      title: 'Art',
      image: image1,
      description: 'Explore the world of art.',
    },
    {
      id: 2,
      title: 'Biography',
      image: image2,
      description: 'Read about inspiring lives.',
    },
    {
      id: 3,
      title: 'Business',
      image: image3,
      description: 'Learn the secrets of successful businesses.',
    },
    {
      id: 4,
      title: 'Children',
      image: image4,
      description: 'Delight the young readers.',
    },
    {
      id: 5,
      title: 'Comics',
      image: image5,
      description: 'Enjoy a world of comic adventures.',
    },
    {
      id: 6,
      title: 'Cookbooks',
      image: image6,
      description: 'Master the art of cooking.',
    },
    {
      id: 7,
      title: 'Economics',
      image: image7,
      description: 'Understand the world of economics.',
    },
    {
      id: 8,
      title: 'Education',
      image: image8,
      description: 'Expand your knowledge base.',
    },
    {
      id: 9,
      title: 'Fiction',
      image: image9,
      description: 'Immerse yourself in fictional worlds.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      <Slider {...settings}>
        {featuredBooks.map((book) => (
          <div key={book.id} className="slide">
            <img src={book.image} alt={book.title} className="slide-image" />
            <div className="slide-text">
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;