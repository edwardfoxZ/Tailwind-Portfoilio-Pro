import "./App.css";
import { About } from "./components/About";
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
    </>
  );
}

export default App;
