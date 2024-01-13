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
          <Route path="/Personal-Homepage" Component={HomeView} />
          <Route path="/Personal-Homepage/computer_science" Component={ComputerScienceView} />
          <Route path="/Personal-Homepage/geography" Component={GeographyView} />
          <Route path="/Personal-Homepage/arts" Component={ArtsView} />
        </Routes>
      </>
        
        
    </Router>
  );
}

export default App;
