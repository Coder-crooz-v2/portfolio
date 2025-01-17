// filepath: /c:/Users/souna/OneDrive/Desktop/dev projects/portfolio/client/src/components/ProjectCards.tsx
import React from 'react';
import { Tilt } from 'react-tilt';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../constants/projects';
import { Link } from 'react-router-dom';

const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
};

const ProjectCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 p-8">
      {projects.map((project, index) => (
        <Link to={project.liveUrl ? project.liveUrl : "#"} target={project.liveUrl ? "_blank" : "_self"} rel="noopener noreferrer" key={index}>
          <Tilt
            key={index}
            className="Tilt relative animate-rainbow w-full"
            options={defaultOptions}
          >
            <div className="Tilt-inner w-full h-full bg-gray-800 text-white p-4 rounded-lg overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="flex justify-between mt-4" onClick={(e) => e.stopPropagation()}>
                <div>
                {project.tags?.map((tag, index) => (
                  <span key={index} className="text-[var(--color-primary)] mr-2 italic text-sm">#{tag}</span>
                ))}
                </div>
                <Link to={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)]">
                  <FaGithub size={24} />
                </Link>
              </div>
            </div>
          </Tilt>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCards;