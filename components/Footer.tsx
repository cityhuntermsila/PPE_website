import React from 'react';
import { HardHatIcon } from './icons/HardHatIcon';
import { Page } from '../App';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const FooterLink: React.FC<{ page: Page; setCurrentPage: (page: Page) => void; children: React.ReactNode; }> = ({ page, setCurrentPage, children }) => (
    <button onClick={() => setCurrentPage(page)} className="text-brand-light hover:text-success-green transition-colors">
        {children}
    </button>
);

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-brand-secondary">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <HardHatIcon className="h-7 w-7 text-success-green" />
              <span className="text-lg font-bold text-brand-text">Secur-AI</span>
            </div>
            <p className="text-sm text-brand-light max-w-xs">
              La sécurité intelligente pour un avenir sans accident.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-brand-text mb-4">Navigation</h3>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <FooterLink page="home" setCurrentPage={setCurrentPage}>Accueil</FooterLink>
              <FooterLink page="products" setCurrentPage={setCurrentPage}>Produits</FooterLink>
              <FooterLink page="services" setCurrentPage={setCurrentPage}>Services</FooterLink>
              <FooterLink page="faq" setCurrentPage={setCurrentPage}>FAQ</FooterLink>
              <FooterLink page="contact" setCurrentPage={setCurrentPage}>Contact</FooterLink>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-brand-text mb-4">Légal</h3>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <a href="#" className="text-brand-light hover:text-success-green transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-brand-light hover:text-success-green transition-colors">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-accent/30 mt-8 pt-6 text-center text-sm text-brand-light">
          <p>&copy; {new Date().getFullYear()} Secur-AI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;