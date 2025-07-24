import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react';
export const Navbar: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md' : 'bg-white/0 dark:bg-black/0'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-mono font-bold neon-text-green">
          <span className="text-black dark:text-white">b3nzuk3</span>
          <span className="text-[#006400]">.dev</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <button onClick={toggleTheme} className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:neon-glow-green transition-all duration-300" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? <SunIcon className="w-5 h-5 text-[#006400]" /> : <MoonIcon className="w-5 h-5 text-[#006400]" />}
          </button>
        </nav>
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleTheme} className="p-2 mr-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:neon-glow-green transition-all duration-300" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? <SunIcon className="w-5 h-5 text-[#006400]" /> : <MoonIcon className="w-5 h-5 text-[#006400]" />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md bg-gray-100 dark:bg-gray-800" aria-label="Toggle menu">
            {mobileMenuOpen ? <XIcon className="w-5 h-5 text-black dark:text-white" /> : <MenuIcon className="w-5 h-5 text-black dark:text-white" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <NavLinks mobile setMobileMenuOpen={setMobileMenuOpen} />
          </div>
        </div>}
    </header>;
};
interface NavLinksProps {
  mobile?: boolean;
  setMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavLinks: React.FC<NavLinksProps> = ({
  mobile,
  setMobileMenuOpen
}) => {
  const navItems = [{
    label: 'Home',
    href: '#home'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Projects',
    href: '#projects'
  }, {
    label: 'Skills',
    href: '#skills'
  }, {
    label: 'Pricing',
    href: '#pricing'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  const handleClick = () => {
    if (mobile && setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  return <>
      {navItems.map(item => <a key={item.label} href={item.href} onClick={handleClick} className={`font-mono text-black dark:text-white hover:text-[#006400] dark:hover:text-[#006400] hover:neon-text-green transition-all duration-300 ${mobile ? 'block py-2 text-lg' : ''}`}>
          {item.label}
        </a>)}
    </>;
};