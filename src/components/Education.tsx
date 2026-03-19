import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaUniversity, FaCalendarAlt, FaAward } from 'react-icons/fa';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'B.Tech - Computer Science and Engineering',
      institution: 'Hemvati Nandan Bahuguna Garhwal University',
      location: 'Srinagar, Uttarakhand',
      period: 'Graduated 08/2023',
      grade: 'CGPA: 8.04/10.0'
    }
  ];

  const certificates = [
    'Python Essentials – Cisco',
    'REST API Certification – HackerRank',
    'Data Science Mastery – Scaler',
    'Winter Consulting Program 2023 – IIT Guwahati'
  ];

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-6"
          >
            <FaGraduationCap className="text-primary-400" />
            <span>Education & Certifications</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
            <span className="gradient-text">Academic Background</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white flex items-center">
              <FaUniversity className="text-primary-400 mr-4" />
              Education
            </h3>
            
            {educationData.map((edu, index) => (
              <div key={index} className="glass-effect-strong rounded-2xl p-8 card-hover">
                <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                <div className="text-primary-300 font-medium mb-4">{edu.institution}</div>
                
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <FaCalendarAlt />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaAward className="text-warning-400" />
                    <span className="text-white font-semibold">{edu.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white flex items-center">
              <FaCertificate className="text-accent-400 mr-4" />
              Certifications
            </h3>
            
            <div className="glass-effect rounded-2xl p-8">
              <ul className="space-y-4">
                {certificates.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 hover:bg-white/5 rounded-xl transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaAward className="text-accent-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-lg">{cert}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
