import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaRocket, FaCode } from 'react-icons/fa';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/utsavhingar22', label: 'GitHub', color: 'hover:text-slate-900 dark:hover:text-gray-300' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/utsavhingar22', label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { icon: FaCode, href: 'https://leetcode.com/utsavhingar22', label: 'LeetCode', color: 'hover:text-yellow-600 dark:hover:text-yellow-500' },
    { icon: FaEnvelope, href: 'mailto:utsavhingar22@gmail.com', label: 'Email', color: 'hover:text-red-500 dark:hover:text-red-400' },
  ];

  const floatingElements = [
    { icon: '⚛️', delay: 0, position: 'top-20 left-10' },
    { icon: '🚀', delay: 1, position: 'top-40 right-20' },
    { icon: '💻', delay: 2, position: 'bottom-40 left-20' },
    { icon: '🎯', delay: 3, position: 'bottom-20 right-10' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding-lg hero-bg overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: element.delay, duration: 2 }}
          className={`absolute ${element.position} text-4xl floating-element pointer-events-none`}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 dark:bg-primary-500/20 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/20 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-full text-sm text-slate-600 dark:text-gray-300 shadow-sm dark:shadow-none"
          >
            <FaRocket className="text-primary-600 dark:text-primary-400" />
            <span>Available for new opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl font-bold font-display">
              <span className="gradient-text text-shadow-lg">Utsav</span>
              <br />
              <span className="text-slate-800 dark:text-white text-shadow-lg">Hingar</span>
            </h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl text-slate-600 dark:text-gray-300 font-medium"
            >
              Mobile Software Engineer
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Building scalable Flutter applications and FinTech platforms across Android and iOS.
            Experienced in clean architecture, API integrations, and delivering high-performance mobile solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className={`w-14 h-14 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center text-slate-500 dark:text-gray-400 ${social.color} transition-all duration-300 hover:bg-white dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:shadow-lg dark:hover:shadow-glow shadow-sm dark:shadow-none`}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex justify-center space-x-12 pt-12"
          >
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '150K+', label: 'App Downloads' },
              { number: '1000+', label: 'APIs Integrated' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-slate-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-slate-400 dark:text-gray-400"
          >
            <span className="text-sm font-mono tracking-widest uppercase text-xs">Scroll Down</span>
            <FaArrowDown className="text-primary-500 dark:text-primary-400 text-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 