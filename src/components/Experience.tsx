import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Development Engineer - 1',
      company: 'Jai Kisan',
      location: 'Bangalore, India',
      period: '03/2025 - Present',
      type: 'Full-time',
      description: [
        'Developed and scaled a production-grade Flutter mobile application for retailers.',
        'Architected a config-driven onboarding system supporting multiple financial products.',
        'Implemented end-to-end KYC and onboarding flows (PAN, Aadhaar e-KYC, GST).',
        'Built post-sanction workflows including eNACH mandates, digital agreements.',
        'Designed repayment modules with real-time tracking and multi-mode payment.',
        'Contributed to backend services using Python and Node.js APIs.'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Razorpay', 'AWS S3'],
      achievements: ['Won JK Internal AI Hackathon 2025', 'Integrated 100+ REST APIs'],
      logo: '🚀'
    },
    {
      title: 'Software Developer (Flutter)',
      company: 'Rubixe-AI',
      location: 'Bangalore, India',
      period: '08/2023 - 03/2025',
      type: 'Full-time',
      description: [
        'Independently developed cross-platform Flutter applications across EdTech and ERP.',
        'Built and scaled Datamites, Skillfloor, and Skillogic mobile apps.',
        'Implemented LMS functionalities including course access, streaming, and auth.',
        'Designed responsive and intuitive mobile interfaces.',
        'Optimized application data handling and API performance.'
      ],
      technologies: ['Flutter', 'Dart', 'Provider', 'Riverpod', 'Android', 'iOS'],
      achievements: ['Reached 150K+ app downloads', 'Scaled multiple EdTech platforms'],
      logo: '📱'
    },
    {
      title: 'Summer Intern',
      company: 'Merino Consulting Services',
      location: 'Delhi, India',
      period: '07/2022 - 08/2022',
      type: 'Internship',
      description: [
        'Gained hands-on exposure to responsive design principles using JS.',
        'Enhanced UI consistency across various web projects.',
        'Collaborated with teams to meet project deadlines.'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'UI/UX'],
      achievements: ['Improved app performance by 15%'],
      logo: '💼'
    },
    {
      title: 'Web Dev & Designing Intern',
      company: 'The Sparks Foundation',
      location: 'Remote',
      period: '08/2021 - 09/2021',
      type: 'Internship',
      description: [
        'Developed full-stack web apps including a Banking System.',
        'Built a Payment Gateway application interface.',
        'Participated in backend logic and REST API integration.'
      ],
      technologies: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'MySQL'],
      achievements: ['Completed 2 full-stack projects'],
      logo: '💻'
    }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl"></div>

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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-full text-sm text-slate-700 dark:text-gray-300 shadow-sm dark:shadow-none mb-6"
          >
            <FaBriefcase className="text-primary-600 dark:text-primary-400" />
            <span>Experience</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
            <span className="gradient-text">My Journey</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional experience and growth in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-400 to-transparent dark:from-primary-500 dark:via-accent-500 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-slate-50 dark:border-dark-950 transform -translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} ml-12 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect-strong rounded-2xl p-8 card-hover-strong"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500/10 to-accent-500/10 dark:from-primary-500/20 dark:to-accent-500/20 rounded-xl flex items-center justify-center text-2xl">
                          {exp.logo}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{exp.title}</h3>
                          <div className="flex items-center space-x-4 text-slate-600 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <FaStar size={14} className="text-primary-500" />
                              <span className="font-medium text-slate-700 dark:text-gray-300">{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaMapMarkerAlt size={14} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-slate-500 dark:text-gray-400 mb-1">
                          <FaCalendarAlt size={14} />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-500/20 dark:text-primary-300 rounded-full text-sm">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 mb-6">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3 text-slate-700 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {exp.achievements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Key Achievements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <span
                              key={achievementIndex}
                              className="px-3 py-1 bg-success-100 text-success-700 dark:bg-success-500/20 dark:text-success-300 rounded-full text-sm font-medium"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 rounded-lg text-sm shadow-sm dark:shadow-none font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#skills"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View My Skills
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;