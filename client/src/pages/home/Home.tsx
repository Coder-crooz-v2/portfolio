import Achievements from "./sections/Achievements"
import ContactMe from "./sections/ContactMe"
import Education from "./sections/Education"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import WelcomeSection from "./sections/WelcomeSection"

const Home = () => {
  return (
    <div className="text-gray-300">
        <WelcomeSection/>
        <div className="bg-[var(--color-background)] p-4">
            <Education/>
            <Projects/>
            <Skills/>
            <Achievements/>
            <ContactMe/>
        </div>
    </div>
  )
}

export default Home
