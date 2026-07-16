import { Hero } from '@/layout/Hero';
import { Stats } from '@/layout/Stats';
import { Projects } from '@/layout/Projects';
import { About } from '@/layout/About';
import { Service } from '@/layout/Service';
import { Resume } from '@/layout/Resume';
// import { Testimonials } from '@/layout/Testimonials';
import { Contact } from '@/layout/Contact';
import Lenis from 'lenis';
import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl'>
      <Hero />
      <Stats />
      <About />
      <Service />
      <Projects />
      <Resume />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
};

export default App;
