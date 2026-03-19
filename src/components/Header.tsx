import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaCode, FaTrophy, FaEnvelope } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: FaHome },
    { name: 'About', href: '#about', icon: FaUser },
    { name: 'Experience', href: '#experience', icon: FaBriefcase },
    { name: 'Skills', href: '#skills', icon: FaCode },
    { name: 'Achievements', href: '#achievements', icon: FaTrophy },
    { name: 'Contact', href: '#contact', icon: FaEnvelope },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-effect-strong' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center glow-effect">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text font-display">Utsav Hingar</h1>
              <p className="text-xs text-gray-400 font-mono">SDE</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-white bg-white/10 backdrop-blur-sm'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </span>
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg border border-white/20"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-white bg-white/10 backdrop-blur-sm'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header; 