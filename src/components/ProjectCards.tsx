// filepath: /c:/Users/souna/OneDrive/Desktop/dev projects/portfolio/client/src/components/ProjectCards.tsx
import React from 'react';
import { Tilt } from 'react-tilt';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    imageUrl: 'path/to/project1.jpg',
    githubUrl: 'https://github.com/your-username/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    imageUrl: 'path/to/project2.jpg',
    githubUrl: 'https://github.com/your-username/project2',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3',
    imageUrl: 'path/to/project3.jpg',
    githubUrl: 'https://github.com/your-username/project3',
  },
  {
    title: 'Project 4',
    description: 'Description of project 4',
    imageUrl: 'path/to/project4.jpg',
    githubUrl: 'https://github.com/your-username/project4',
  },
  {
    title: 'Project 5',
    description: 'Description of project 5',
    imageUrl: 'path/to/project5.jpg',
    githubUrl: 'https://github.com/your-username/project5',
  },
  {
    title: 'Project 6',
    description: 'Description of project 6',
    imageUrl: 'path/to/project6.jpg',
    githubUrl: 'https://github.com/your-username/project6',
  },
];

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
};

const ProjectCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {projects.map((project, index) => (
        <Tilt
          key={index}
          className="Tilt relative animate-rainbow"
          options={defaultOptions}
          style={{ height: 268, width: 250 }}
        >
          <div className="Tilt-inner bg-gray-800 text-white p-4 relative rounded-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 text-blue-500 hover:text-blue-700">
              <FaGithub size={24} />
            </a>
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default ProjectCards;