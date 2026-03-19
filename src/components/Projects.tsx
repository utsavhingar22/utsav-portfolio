import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaEye, FaCode, FaRocket } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Redux'],
      github: 'https://github.com/utsavhingar/ecommerce',
      live: 'https://ecommerce-demo.com',
      category: 'fullstack',
      featured: true,
      stats: { users: '10K+', rating: '4.8', downloads: '5K+' }
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Express', 'PostgreSQL'],
      github: 'https://github.com/utsavhingar/task-manager',
      live: 'https://task-manager-demo.com',
      category: 'fullstack',
      featured: true,
      stats: { users: '5K+', rating: '4.9', downloads: '3K+' }
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark mode, and optimized performance.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/utsavhingar/portfolio',
      live: 'https://utsavhingar.com',
      category: 'frontend',
      featured: false,
      stats: { users: '2K+', rating: '4.7', downloads: '1K+' }
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecasts using OpenWeatherMap API. Features location-based weather and interactive maps.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'JavaScript', 'OpenWeatherMap API', 'Chart.js'],
      github: 'https://github.com/utsavhingar/weather-app',
      live: 'https://weather-demo.com',
      category: 'frontend',
      featured: false,
      stats: { users: '8K+', rating: '4.6', downloads: '4K+' }
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for blogs with markdown support, user authentication, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth'],
      github: 'https://github.com/utsavhingar/blog-platform',
      live: 'https://blog-demo.com',
      category: 'fullstack',
      featured: false,
      stats: { users: '3K+', rating: '4.5', downloads: '2K+' }
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'AWS S3'],
      github: 'https://github.com/utsavhingar/chat-app',
      live: 'https://chat-demo.com',
      category: 'fullstack',
      featured: false,
      stats: { users: '15K+', rating: '4.8', downloads: '8K+' }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: FaFolder },
    { id: 'frontend', label: 'Frontend', icon: FaCode },
    { id: 'fullstack', label: 'Full Stack', icon: FaRocket },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-6"
          >
            <FaFolder className="text-primary-400" />
            <span>Projects</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
            <span className="gradient-text">Featured Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent projects and creative solutions
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glass-effect rounded-2xl p-2">
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <filter.icon size={18} />
                <span>{filter.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative ${
                  project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-effect-strong rounded-2xl overflow-hidden card-hover-strong h-full"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                        {project.category === 'frontend' ? '🎨' : '🚀'}
                      </div>
                    </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold rounded-full">
                        Featured
                      </div>
                    )}
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs text-white">
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 rounded-lg text-sm hover:bg-white/10 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <FaGithub size={18} />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <FaExternalLinkAlt size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/utsavhingar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 