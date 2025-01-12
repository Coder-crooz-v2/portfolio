// filepath: src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AboutMe from './pages/AboutMe';
import CodingStats from './pages/CodingStats';
import Projects from './pages/Projects';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/codingstats" element={<CodingStats/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;