import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { SectionHeader } from '@/layout/SectionHeader';
import { education, experience, tools } from '@/constants';
import { ExpCard } from '@/layout/ExpCard';

export const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='resume'
    >
      <SectionHeader
        subtitle='Resume'
        title='Education and Experience'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        With a background in Computer Science and hands-on experience in design
        and front-end development, i've worked on diverse projects ranging from
        landing pages to Saas dashboards, Each project has strengthened my focus
        on building clean, functional, and user-friendly digital experiences
      </motion.p>

      <div className=''>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>
        </motion.div>
        <div className=''>
          {education.map((item, i) => (
            <ExpCard
              key={i}
              item={item}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
