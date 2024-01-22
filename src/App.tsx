import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import { About, Hero, ComputerScience, Geography, Arts, BachelorsThesis, BerryPickerTracker, GithubProjects } from "./views";
import { TopBar } from "./components";

const HomeView = () => (
  <>
    <Hero />
    <About />

  </>
);

const ComputerScienceView = () => (
  <>
    <ComputerScience />
    <BachelorsThesis />
    <BerryPickerTracker />
    <GithubProjects />
  </>
);

const GeographyView = () => (
  <>
    <Geography />
  </>
);

const ArtsView = () => (
  <>
    <Arts />
  </>
);

function App() {
  return (
    <Router>
      <TopBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/computer_science" element={<ComputerScienceView />} />
        <Route path="/geography" element={<GeographyView />} />
        <Route path="/arts" element={<ArtsView />} />
      </Routes>
    </Router>
  );
}

export default App;
