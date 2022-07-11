import type { NextPage } from 'next';
import Hero from '../src/components/Hero';
import Projects from '../src/components/Projects';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
};

export default Home;
