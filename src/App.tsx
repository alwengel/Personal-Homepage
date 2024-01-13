//router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




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
      <>
        <Routes>
          <Route path="/Personal-Homepage" element={<HomeView />} />
          <Route path="/Personal-Homepage/computer_science" element={<ComputerScienceView />} />
          <Route path="/Personal-Homepage/geography" element={<GeographyView />} />
          <Route path="/Personal-Homepage/arts" element={<ArtsView />} />
        </Routes>
      </>
        
        
    </Router>
  );
}

export default App;
