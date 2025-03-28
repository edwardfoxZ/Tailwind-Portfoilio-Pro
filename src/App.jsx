import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Work } from "./components/Work";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
