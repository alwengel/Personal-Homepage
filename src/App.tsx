//router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




// views
import { About, Contact, Hero, Projects, ComputerScience, Geography, Arts } from "./views" 


// components
import { Menu } from "./components";


const Home = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Contact />
    
  </>
)



function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/computer_science" Component={ComputerScience} />
          <Route path="/geography" Component={Geography} />
          <Route path="/arts" Component={Arts} />
        </Routes>
      </>
        <Menu />
    </Router>
  );
}

export default App;
