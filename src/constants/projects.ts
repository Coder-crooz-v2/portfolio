import spotichat from '../assets/projects/spotichat.png';
import gemai from '../assets/projects/gemai.png';
import movieRecommender from '../assets/projects/movie-recommender.png';
import bigInteger from '../assets/projects/big-integer.jpg';

export const projects = [
    {
      title: 'Spotichat',
      description: 'A real time chat application with the benefit of listening to your favourite songs',
      imageUrl: spotichat,
      tags: [
        'React',
        'Express.js',
        'Socket.io',
      ],
      liveUrl: 'https://spotichat.onrender.com/',
      githubUrl: 'https://github.com/Coder-crooz-v2/Spotichat',
    },
    {
      title: 'Gem AI',
      description: 'A web application that uses machine learning to generate images for free',
      imageUrl: gemai,
      tags: [
        'React',
        'Express.js',
        'MongoDB',
      ],
      liveUrl: 'https://gem-ai-seven.vercel.app/',
      githubUrl: 'https://github.com/Coder-crooz-v2/gem-ai',
    },
    {
      title: 'Movie recommender',
      description: 'A movie recommendation system that uses NLP to recommend movies',
      imageUrl: movieRecommender,
      tags: [
        'NLP',
        'Flask API'
      ],
      githubUrl: 'https://github.com/Coder-crooz-v2/movie-recommender',
    },
    {
      title: 'Big Integer',
      description: 'A custom big integer class in C++ that can handle integers of any size',
      imageUrl: bigInteger,
      tags: [
        'C++',
        'OOPs'
      ],
      githubUrl: 'https://github.com/your-username/project4',
    },
  ];