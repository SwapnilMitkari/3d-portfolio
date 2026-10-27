import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experiments from "./components/Experiments";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Experiments />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
