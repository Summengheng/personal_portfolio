import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { SectionHeader } from '@/layout/SectionHeader';
import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Turning ideas into responsive web applications'
      />
      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        I'm a Web Developer with over two years of professional experience
        building responsive and high-performance web applications. My expertise
        is in frontend development, where I create modern user interfaces using
        Vue.js, TypeScript, HTML, CSS, and JavaScript while integrating REST
        APIs and collaborating with designers and backend developers to deliver
        reliable digital solutions. I enjoy transforming UI/UX designs into
        intuitive and engaging user experiences while writing clean,
        maintainable, and scalable code. Passionate about continuous learning,
        I'm currently expanding my skills in React and modern frontend
        technologies to build fast, accessible, and user-focused web
        applications.
      </motion.p>

      {/* <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        Web Developer with 2+ years of experience building responsive and
        high-performance web applications using Vue.js, TypeScript, HTML, CSS,
        and JavaScript. Skilled in converting UI/UX designs into functional
        interfaces, integrating REST APIs, and optimizing web application
        performance. Experienced in debugging, maintaining web systems, and
        collaborating with cross-functional teams to deliver scalable digital
        solutions. Passionate about clean code, continuous learning, and modern
        web technologies.
      </motion.p> */}
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button className='mt-5'>
          <a
            href='https://t.me/summengheng'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contact Me
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default About;
