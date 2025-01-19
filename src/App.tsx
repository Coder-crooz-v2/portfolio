// filepath: src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CodingStats from './pages/codingStats/CodingStats';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/codingstats" element={<CodingStats/>} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;