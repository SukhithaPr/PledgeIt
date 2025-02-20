
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-playfair font-bold text-secondary">
            PledgeIt
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#team">Team</NavLink>
            <Link to="/about" className="text-secondary hover:text-primary transition-colors duration-300 font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-secondary hover:text-primary transition-colors duration-300 font-medium">
              Contact
            </Link>
            <a 
              href="https://app.pledgeit.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full transition-colors duration-300"
            >
              Visit Platform
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
            <div className="flex flex-col py-4 px-4 space-y-4">
              <MobileNavLink href="#features" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </MobileNavLink>
              <MobileNavLink href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>
                How It Works
              </MobileNavLink>
              <MobileNavLink href="#team" onClick={() => setIsMobileMenuOpen(false)}>
                Team
              </MobileNavLink>
              <Link 
                to="/about" 
                className="text-secondary hover:text-primary transition-colors duration-300 font-medium block w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-secondary hover:text-primary transition-colors duration-300 font-medium block w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="https://app.pledgeit.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full transition-colors duration-300 w-full text-center"
              >
                Visit Platform
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-secondary hover:text-primary transition-colors duration-300 font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href}
    className="text-secondary hover:text-primary transition-colors duration-300 font-medium block w-full text-center"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navigation;
