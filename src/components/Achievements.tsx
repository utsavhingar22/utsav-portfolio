import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Winner – JK Internal AI Hackathon 2025",
      organization: "Jai Kisan",
      description: "Awarded Best Overall Prototype for building an Early Warning System, a generative AI-powered solution to detect potential financial risk signals in advance.",
      icon: FaTrophy,
      color: "text-warning-500 dark:text-warning-400",
      bg: "bg-warning-500/20"
    },
    {
      title: "Top 10 Percentile",
      organization: "Summer Analytics'24, IIT Guwahati",
      description: "Ranked in the top echelon of a highly competitive national level analytics and data science competition.",
      icon: FaStar,
      color: "text-primary-600 dark:text-primary-400",
      bg: "bg-primary-500/20"
    },
    {
      title: "AIR 102",
      organization: "CodeKaze’23, Coding Ninjas",
      description: "Secured All India Rank 102 in one of India’s largest coding competitions.",
      icon: FaMedal,
      color: "text-accent-600 dark:text-accent-400",
      bg: "bg-accent-500/20"
    },
    {
      title: "AIR 74",
      organization: "CIT, Internship Studio",
      description: "Secured an exceptional national ranking for technical aptitude and problem-solving.",
      icon: FaMedal,
      color: "text-success-600 dark:text-success-400",
      bg: "bg-success-500/20"
    },
    {
      title: "TCS NQT Qualified",
      organization: "TCS (2023)",
      description: "Successfully cleared the National Qualifier Test showcasing strong cognitive and programming skills.",
      icon: FaStar,
      color: "text-primary-600 dark:text-primary-400",
      bg: "bg-primary-500/20"
    },
    {
      title: "Finalist (Top 12) | Commander of Full Stack",
      organization: "Tally CodeBrewers 2022",
      description: "Emerged as a top 12 finalist in a rigorous full stack development hackathon hosted by Tally.",
      icon: FaTrophy,
      color: "text-warning-500 dark:text-warning-400",
      bg: "bg-warning-500/20"
    }
  ];

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-warning-500/10 dark:bg-warning-500/5 rounded-full blur-3xl"></div>
      
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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-full text-sm text-slate-700 dark:text-gray-300 shadow-sm dark:shadow-none mb-6"
          >
            <FaTrophy className="text-warning-500 dark:text-warning-400" />
            <span>Highlights</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
            <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 cursor-default"
            >
              <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 shadow-sm dark:shadow-none`}>
                <item.icon className={`text-2xl ${item.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
              <div className="text-sm font-semibold text-primary-600 dark:text-primary-300 mb-4">{item.organization}</div>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
