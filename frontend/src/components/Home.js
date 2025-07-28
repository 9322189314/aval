import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Showcase from './Showcase';
import Research from './Research';
import Collab from './Collab';
import FreelancingPage from './FreelancingPage';
import Login from './Login';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Research />
      <Collab />
      <FreelancingPage />
      <Login />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;