import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { colors } from "./Config/theme";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

function App() {
  const [activeSection, setActiveSection] = useState("home");

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
        backgroundColor: colors.background,
        position: "relative",
      }}
    >
      <header
        style={{
          top: 0,
          position: "sticky",
          backgroundColor: colors.primary,
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
        {/* <section id="services">
          <Services />
        </section> */}
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="project">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>

        {/* 
        <section id="project">
          <Projects />
        </section>
        <section id="resume">
          <Resume />
        </section>*/}
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
