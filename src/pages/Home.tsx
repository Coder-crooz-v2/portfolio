// filepath: src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import ParticlesComponent from '../components/ParticlesComponent';
import Footer from '../components/Footer';
import ProjectSection from '../sections/ProjectSection';
import SkillsSection from '../sections/SkillsSection';
import AchievementsSection from '../sections/AchievementsSection';
import WelcomeSection from '../sections/WelcomeSection';
import EducationSection from '../sections/EducationSection';
import Starfield from 'react-starfield';
import ContactMe from '../sections/ContactMe';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <ParticlesComponent />
      <div className="flex justify-center items-center h-screen min-h-screen">
      <WelcomeSection/>
      </div>
      <div className="bg-[var(--color-background)] text-gray-300 z-[-1] min-h-screen p-8">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
          <EducationSection/>

          <ProjectSection/>

          <SkillsSection/>

        <AchievementsSection/>

        <ContactMe/>
      </div>
      <Footer/>
    </>
  );
};

export default Home;