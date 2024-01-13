// Use HashRouter instead of BrowserRouter
import { HashRouter as Router, Route, Routes } from "react-router-dom";


// views
import { About, Hero, ComputerScience, Geography, Arts, BachelorsThesis, BerryPickerTracker, GithubProjects } from "./views" 


// components
import { Menu, TopBar } from "./components";


const HomeView = () => (
  <>
    <Hero />
    <About />
    <Menu />
    
  </>
)

const ComputerScienceView = () => (
  <>
    <ComputerScience />
    <BachelorsThesis />
    <BerryPickerTracker />
    <GithubProjects />
  </>
)

const GeographyView = () => (
  <>
    <Geography />
  </>
)

const ArtsView = () => (
  <>
    <Arts />
  </>
)



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
