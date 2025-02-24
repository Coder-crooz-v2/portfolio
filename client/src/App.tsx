import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import ParticlesComponent from "./components/Particles"
import Home from "./pages/home/Home"
import Footer from "./components/Footer"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <ParticlesComponent id="particles" />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
