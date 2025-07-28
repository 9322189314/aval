import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Dynamic Island Style Logo */}
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-2 rounded-full border border-gray-700">
            <h1 className="cal-sans text-2xl gradient-text font-bold">AVAL</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="dm-sans text-gray-300 hover:text-white transition-colors">Freelance</a>
          <a href="#showcase" className="dm-sans text-gray-300 hover:text-white transition-colors">Showcase</a>
          <a href="#research" className="dm-sans text-gray-300 hover:text-white transition-colors">Research</a>
          <a href="#collab" className="dm-sans text-gray-300 hover:text-white transition-colors">Collab</a>
          <a href="#contact" className="dm-sans text-gray-300 hover:text-white transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="btn-transparent">Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card mt-2 mx-6 p-6">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="dm-sans text-gray-300 hover:text-white transition-colors">Freelance</a>
            <a href="#showcase" className="dm-sans text-gray-300 hover:text-white transition-colors">Showcase</a>
            <a href="#research" className="dm-sans text-gray-300 hover:text-white transition-colors">Research</a>
            <a href="#collab" className="dm-sans text-gray-300 hover:text-white transition-colors">Collab</a>
            <a href="#contact" className="dm-sans text-gray-300 hover:text-white transition-colors">Contact</a>
            <button className="btn-transparent w-full mt-4">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;