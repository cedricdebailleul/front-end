import React, { useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Timeline = () => {
  const timelineData = [
    {
      title: 'Expérience professionnelle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'Jan 2019 - Juin 2020',
    },
    {
      title: 'Formation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'Sept 2016 - Mai 2018',
    },
    {
      title: 'Compétences',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'Mai 2015 - Juin 2016',
    },
    {
      title: 'Projets',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'Fév 2014 - Avr 2015',
    },
    {
      title: 'Éducation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'Sept 2011 - Jan 2014',
    },
    {
      title: 'Langues',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'Mai 2010 - Juil 2011',
    },
    {
      title: 'Certifications',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'Oct 2008 - Avr 2010',
    },
    {
      title: 'Récompenses',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'Jan 2007 - Juin 2008',
    },
  ];

  const { scrollYProgress } = useViewportScroll();
  const lineColor = useTransform(scrollYProgress, [0, 1], ['#ffffff', '#0000ff']);

  useEffect(() => {
    scrollYProgress.onChange((latestProgress) => {
      const lineElement = document.getElementById('timeline-line');
      if (lineElement) {
        lineElement.style.backgroundColor = lineColor.get();
      }
    });
  }, [lineColor, scrollYProgress]);

  return (
    <div className="flex flex-col items-start bg-primary">
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className="relative flex items-start"
        >
          <div className="w-4 h-4 bg-blue-500 rounded-full mt-6" />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            className="absolute top-7.5 left-2.5 h-1 bg-blue-500"
            style={{ backgroundColor: '#ffffff' }}
            id="timeline-line"
          />
          <div className="flex flex-col items-start p-4 my-4 ml-6 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
            <p className="text-xs text-gray-500">{item.date}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;

