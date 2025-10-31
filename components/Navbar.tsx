import React from 'react';
import { HardHatIcon } from './icons/HardHatIcon';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, setCurrentPage, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'bg-brand-accent text-white'
          : 'text-brand-light hover:bg-brand-accent/50 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};


const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-brand-secondary/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => setCurrentPage('home')} className="flex items-center space-x-2">
            <HardHatIcon className="h-8 w-8 text-success-green" />
            <span className="text-xl font-bold text-brand-text">Secur-AI</span>
          </button>
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink page="home" currentPage={currentPage} setCurrentPage={setCurrentPage}>Accueil</NavLink>
            <NavLink page="products" currentPage={currentPage} setCurrentPage={setCurrentPage}>Produits</NavLink>
            <NavLink page="services" currentPage={currentPage} setCurrentPage={setCurrentPage}>Services</NavLink>
            <NavLink page="faq" currentPage={currentPage} setCurrentPage={setCurrentPage}>FAQ</NavLink>
            <NavLink page="contact" currentPage={currentPage} setCurrentPage={setCurrentPage}>Contact</NavLink>
          </nav>
          <button onClick={() => setCurrentPage('contact')} className="hidden md:block bg-success-green text-white font-bold py-2 px-4 rounded-lg hover:bg-success-green/80 transition-colors duration-300">
            Obtenir un Devis
          </button>
          {/* Mobile menu could be added here */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;