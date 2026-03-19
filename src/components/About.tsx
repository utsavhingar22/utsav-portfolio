import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaMobile, FaLightbulb } from 'react-icons/fa';

const About: React.FC = () => {
  const quickFacts = [
    { icon: FaUser, label: 'Experience', value: '3+ Years', color: 'text-primary-600 dark:text-primary-400' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Bengaluru, India', color: 'text-accent-600 dark:text-accent-400' },
    { icon: FaGraduationCap, label: 'Education', value: 'B.Tech CSE', color: 'text-success-600 dark:text-success-400' },
    { icon: FaMobile, label: 'Specialty', value: 'Flutter, Android, iOS', color: 'text-warning-600 dark:text-warning-400' },
  ];

  const skills = [
    { name: 'Mobile Development', icon: '📱', description: 'Flutter, Dart, Android, iOS' },
    { name: 'Backend Services', icon: '⚙️', description: 'Python, Node.js, REST APIs' },
    { name: 'FinTech Architecture', icon: '🏦', description: 'KYC, Payments, Loan Life Cycle' },
    { name: 'Clean Architecture', icon: '🏗️', description: 'MVVM, Riverpod, OOP Patterns' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl"></div>

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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-full text-sm text-slate-600 dark:text-gray-300 shadow-sm dark:shadow-none mb-6"
          >
            <FaUser className="text-primary-600 dark:text-primary-400" />
            <span>About Me</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
            <span className="gradient-text">Who I Am</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
            A Mobile Software Engineer specializing in high-performance Flutter applications and scalable FinTech platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                My Journey
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a Mobile Software Engineer with over 3 years of experience building scalable applications 
                  that solve complex problems. Currently, I work as an SDE-1 at Jai Kisan, developing robust 
                  Flutter-based solutions and backend services for FinTech products.
                </p>
                
                <p>
                  My expertise lies in architecting cross-platform apps with deep integrations—from end-to-end 
                  KYC flows and dynamic onboarding systems to post-sanction workflows like eNACH and digital signing. 
                  I believe in clean architecture, type safety, and building state-driven, config-controlled software.
                </p>
                
                <p>
                  Whether it's scaling EdTech apps to thousands of users or building complex loan transaction modules, 
                  I am driven by the impact my work has on end users. I thrive in agile environments, collaborating 
                  across design and backend teams to deliver stable, high-performance applications.
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-xl p-4 text-center"
                >
                  <fact.icon className={`mx-auto mb-2 ${fact.color}`} size={24} />
                  <div className="text-sm text-slate-500 dark:text-gray-400">{fact.label}</div>
                  <div className="font-semibold text-slate-800 dark:text-white mt-1">{fact.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* What I Do */}
            <div className="glass-effect-strong rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                <FaLightbulb className="text-primary-600 dark:text-primary-400 mr-3" />
                What I Do
              </h4>
              <ul className="space-y-4">
                {[
                  'Cross-platform mobile apps with Flutter & Dart',
                  'Config-driven onboarding and KYC workflows',
                  'Secure Fintech integrations (Razorpay, Digio)',
                  'Backend REST APIs with Python and Node.js',
                  'Clean architecture and complex state management'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 text-slate-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Core Skills */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-xl p-6 text-center card-hover"
                >
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h5 className="font-semibold text-slate-800 dark:text-white mb-2">{skill.name}</h5>
                  <p className="text-sm text-slate-500 dark:text-gray-400">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            href="#experience"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View My Experience
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 