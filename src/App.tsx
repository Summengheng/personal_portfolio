import { Hero } from '@/layout/Hero';
import { Stats } from '@/layout/Stats';
import { Projects } from '@/layout/Projects';
import { About } from '@/layout/About';
import { Service } from '@/layout/Service';
import { Resume } from '@/layout/Resume';

export const App = () => {
  return (
    <main className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl'>
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Service />
      <Resume />
    </main>
  );
};

export default App;
