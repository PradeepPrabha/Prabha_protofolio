// src/components/Resume.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiBriefcase, HiAcademicCap, HiDownload } from 'react-icons/hi';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      title: 'Senior Web Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading front-end development initiatives, mentoring junior developers, and implementing scalable architecture.',
      highlights: ['React', 'TypeScript', 'Node.js'],
    },
    {
      title: 'UI/UX Designer',
      company: 'Creative Agency',
      period: '2021 - 2022',
      description: 'Designed user interfaces for 20+ web and mobile applications, conducted user research and usability testing.',
      highlights: ['Figma', 'Adobe XD', 'Prototyping'],
    },
    {
      title: 'Data Analyst',
      company: 'Analytics Corp',
      period: '2020 - 2021',
      description: 'Analyzed large datasets to derive business insights, created interactive dashboards and reports.',
      highlights: ['Python', 'SQL', 'Tableau'],
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Tech University',
      period: '2019 - 2021',
      description: 'Specialized in Human-Computer Interaction and Data Science.',
    },
    {
      degree: 'Bachelor of Technology',
      institution: 'Engineering College',
      period: '2015 - 2019',
      description: 'Major in Computer Science with honors. Graduated top 5% of class.',
    },
  ];

  const TimelineItem = ({ item, index, type }: { item: any; index: number; type: 'experience' | 'education' }) => (
    <motion.div
      initial={{ opacity: 0, x: type === 'experience' ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-secondary" />
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-primary ring-4 ring-dark" />

      <div className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
          <div>
            <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {type === 'experience' ? item.title : item.degree}
            </h4>
            <p className="text-primary font-medium">
              {type === 'experience' ? item.company : item.institution}
            </p>
          </div>
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
            {item.period}
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>
        {item.highlights && (
          <div className="flex flex-wrap gap-2">
            {item.highlights.map((highlight: string) => (
              <span
                key={highlight}
                className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-md"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="resume" className="py-20 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">My Resume</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A journey of continuous learning and professional growth in the world of technology and design.
          </p>
          
          <motion.a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiDownload className="text-lg" />
            Download Full Resume
          </motion.a>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <HiBriefcase className="text-2xl" />
              </div>
              <h3 className="text-2xl font-display font-bold">Work Experience</h3>
            </motion.div>
            <div className="space-y-0">
              {experience.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} type="experience" />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-secondary to-purple-500 flex items-center justify-center">
                <HiAcademicCap className="text-2xl" />
              </div>
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </motion.div>
            <div className="space-y-0">
              {education.map((item, index) => (
                <TimelineItem key={item.degree} item={item} index={index} type="education" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
