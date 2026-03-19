import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'UI/UX Design', href: '#' },
      { name: 'Consulting', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Portfolio', href: '#' },
      { name: 'Resume', href: '#' },
      { name: 'GitHub', href: 'https://github.com/utsavhingar22' }
    ]
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/utsavhingar22',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/utsavhingar22',
      color: 'hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white'
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/utsavhingar22',
      color: 'hover:bg-blue-400 hover:text-white'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-100 to-slate-200 dark:from-dark-900 dark:to-black overflow-hidden border-t border-slate-200 dark:border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-display gradient-text mb-4">
                Utsav Hingar
              </h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
                Full-stack developer passionate about creating innovative digital solutions and building the future of web technology.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                <FaEnvelope className="text-primary-600 dark:text-primary-400" />
                <span>utsavhingar22@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                <FaPhone className="text-primary-600 dark:text-primary-400" />
                <span>+91 9461360575</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 transition-all duration-300 shadow-sm dark:shadow-none ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:gradient-text transition-all duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-4 transition-all duration-300 mr-2"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={service.href}
                    className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:gradient-text transition-all duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-4 transition-all duration-300 mr-2"></span>
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((resource, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={resource.href}
                    target={resource.href.startsWith('http') ? '_blank' : undefined}
                    rel={resource.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:gradient-text transition-all duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-4 transition-all duration-300 mr-2"></span>
                    {resource.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Stay Updated</h3>
            <p className="text-slate-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter for the latest insights on web development, tech trends, and project updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 shadow-sm dark:shadow-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-slate-600 dark:text-gray-400 text-sm"
            >
              © {currentYear} Utsav Hingar. All rights reserved.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-slate-600 dark:text-gray-400 text-sm"
            >
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>in Bengaluru, India</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full shadow-glow z-50 hover:shadow-glow-strong transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;