import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, 
  FaDocker, FaAws, FaDatabase, FaFigma, FaCode, FaTools, FaServer, FaMobileAlt, FaAndroid, FaApple
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs, SiRedux, SiJest, SiFlutter, SiDart, SiFirebase, SiPython, SiKotlin, SiSwift, SiFastapi, SiDjango } from 'react-icons/si';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('mobile');

  const skillCategories = [
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: FaMobileAlt,
      skills: [
        { name: 'Flutter', icon: SiFlutter, level: 95, color: '#02569B' },
        { name: 'Dart', icon: SiDart, level: 90, color: '#0175C2' },
        { name: 'Android', icon: FaAndroid, level: 85, color: '#3DDC84' },
        { name: 'iOS', icon: FaApple, level: 80, color: '#A3AAAE' },
        { name: 'Kotlin', icon: SiKotlin, level: 75, color: '#0095D5' },
        { name: 'Swift', icon: SiSwift, level: 70, color: '#F05138' },
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: FaServer,
      skills: [
        { name: 'Python', icon: SiPython, level: 85, color: '#3776AB' },
        { name: 'Node.js', icon: FaNodeJs, level: 80, color: '#339933' },
        { name: 'FastAPI', icon: SiFastapi, level: 85, color: '#009688' },
        { name: 'Django', icon: SiDjango, level: 75, color: '#092E20' },
        { name: 'Firebase', icon: SiFirebase, level: 95, color: '#FFCA28' },
        { name: 'REST APIs', icon: FaCode, level: 90, color: '#FF6B6B' },
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Architecture',
      icon: FaTools,
      skills: [
        { name: 'Clean Architecture', icon: FaCode, level: 90, color: '#06b6d4' },
        { name: 'Riverpod & Provider', icon: FaCode, level: 95, color: '#8b5cf6' },
        { name: 'Git', icon: FaGitAlt, level: 92, color: '#F05032' },
        { name: 'AWS S3', icon: FaAws, level: 75, color: '#FF9900' },
        { name: 'MySQL', icon: FaDatabase, level: 80, color: '#4479A1' },
      ]
    }
  ];

  const additionalSkills = [
    'Clean Architecture', 'MVC / MVVM', 'Payment Gateways Integration', 'KYC APIs Integration', 
    'Agile Development', 'OOP Principles', 'Data Structures & Algorithms', 'Postman', 
    'CI/CD', 'Code Review', 'Problem Solving', 'Team Collaboration'
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>

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
            <FaCode className="text-primary-400" />
            <span>Skills</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glass-effect rounded-2xl p-2">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <category.icon size={18} />
                <span>{category.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories
            .find(cat => cat.id === activeCategory)
            ?.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-effect rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <skill.icon 
                        size={20} 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{skill.name}</h4>
                      <p className="text-sm text-gray-400">Expert Level</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold gradient-text">{skill.level}%</span>
                </div>
                
                <div className="skill-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="skill-progress"
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`
                    }}
                  />
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Additional Skills & Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 rounded-xl text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 