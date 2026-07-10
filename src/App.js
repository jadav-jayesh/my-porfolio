import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import CustomCursor from "./Components/CustomCursor";
import Marquee from "./Components/Marquee";
import Reveal from "./Components/Reveal";
import { useSelector } from "react-redux";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const { themeData } = useSelector((state) => state.auth);
  // Handle smooth scrolling to the clicked section
  const handleScrollToSection = (event, newValue) => {
    const section = document.getElementById(newValue);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center", // Align to the top of the section
      });
      setActiveSection(newValue);
    }
  };

  // Track the active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "skills",
        "resume",
        "contact",
        "experience",
      ];
      const offset = 150;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (
          section &&
          section.getBoundingClientRect().top < window.innerHeight - offset &&
          section.getBoundingClientRect().bottom > offset
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Scroll to the home section on initial load
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        backgroundColor: themeData.background,
        // faint grid texture for signature depth (shows through transparent hero)
        backgroundImage: `linear-gradient(${themeData.glassBorder} 1px, transparent 1px), linear-gradient(90deg, ${themeData.glassBorder} 1px, transparent 1px)`,
        backgroundSize: "46px 46px",
        position: "relative",
      }}
    >
      <CustomCursor />
      <header
        style={{
          top: 0,
          position: "sticky",
          backgroundColor: themeData.primary,
          zIndex: 1000,
        }}
      >
        <Header
          value={activeSection}
          handleChange={(event, newValue) => {
            handleScrollToSection(event, newValue);
          }}
        />
      </header>
      <main className="main">
        <section id="home">
          <Home />
        </section>
        <Marquee />
        <section id="skills">
          <Reveal>
            <Skills />
          </Reveal>
        </section>
        <section id="experience">
          <Reveal>
            <Experience />
          </Reveal>
        </section>
        <section id="project">
          <Reveal>
            <Projects />
          </Reveal>
        </section>
        <section id="contact">
          <Reveal>
            <Contact />
          </Reveal>
        </section>
      </main>
      <footer>
        <Footer
          handleScrollToSection={(event) => {
            handleScrollToSection(event, "home");
          }}
        />
      </footer>
    </div>
  );
}

export default App;
