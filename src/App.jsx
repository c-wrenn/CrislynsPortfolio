import './App.css'
import Navbar from "./components/Navbar/Navbar";
import { Link, Routes, Route } from "react-router-dom";

// import link routes
import Cardsage from "./components/CodeProjects/Cardsage";
import Cybermart from "./components/CodeProjects/Cybermart";
import Jate from "./components/CodeProjects/Jate";
import Social from "./components/CodeProjects/Social";


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Navbar />

            <header>
              <h1>Crislyn's Portfolio</h1>
              <p>Created to display all my talents</p>
            </header>

            <section>
              <Link to="/Cardsage">
                <button>CardSage</button>
              </Link>

              <Link to="/Cybermart">
              <button>CyberMart</button>
              </Link>

              <Link to="/Jate">
              <button>JATE - Text Editor</button>
              </Link>

              <Link to="/Social">
              <button>Social Network API</button>
              </Link>
            </section>
          </main>
        }
      />

      <Route path="/Cardsage" element={<Cardsage />} />
      <Route path="/Cybermart" element={<Cybermart />} />
      <Route path="/Jate" element={<Jate />} />
      <Route path="/Social" element={<Social />} />
    </Routes>
  );
}

export default App;