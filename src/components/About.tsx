// src/components/About.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiColorSwatch, HiChartBar, HiLightningBolt } from 'react-icons/hi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: HiCode,
      title: 'Web Development',
      description: 'Building responsive, high-performance web applications using modern technologies.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: HiColorSwatch,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually stunning user interfaces that delight users.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: HiChartBar,
      title: 'Data Analysis',
      description: 'Transforming raw data into actionable insights through visualization and analysis.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: HiLightningBolt,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and search engine rankings.',
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' },
    { value: '15+', label: 'Awards Won' },
  ];

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Passionate About Creating
            <span className="gradient-text block">Digital Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a multi-disciplinary professional who bridges the gap between design and development,
            creating seamless digital experiences that drive results.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass rounded-3xl p-8 card-3d transition-transform duration-500">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="w-3/4 h-3/4 relative"
                  >
                    <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full" />
                    <div className="absolute inset-8 border-2 border-dashed border-secondary/30 rounded-full" />
                    <div className="absolute inset-16 border-2 border-dashed border-purple-500/30 rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">🚀</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -right-4 top-8 glass px-4 py-3 rounded-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for Work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-display font-bold mb-6">
              Building Digital Products with Purpose
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              With over 3 years of experience in the digital industry, I've had the privilege 
              of working with startups and established companies alike. My approach combines 
              creative design thinking with technical expertise to deliver solutions that 
              not only look great but perform exceptionally.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I believe in the power of collaboration and continuous learning. Every project 
              is an opportunity to push boundaries and create something meaningful that 
              impacts users' lives positively.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-display font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 card-3d"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
