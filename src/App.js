import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Categories from './components/Categories';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import BooksTable from './components/BooksTable'; 
import BookDetails from './components/BookDetails'; 
import ForgotPassword from './components/forgotPassword';
import BuyNow from './components/BuyNow';   

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/category/:category" element={<BooksTable />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/buynow" element={<BuyNow />} />
              </Routes>
      <Footer />
    </div>
  );
};

export default App;