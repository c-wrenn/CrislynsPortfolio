import './App.css'
import Navbar from "./components/Navbar/Navbar";
import { Link, Routes, Route } from "react-router-dom";

// import link routes
import Cardsage from "./components/CodeProjects/Cardsage";

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
              <Link to="/cardsage">
                <button>CardSage</button>
              </Link>

              <button>CyberMart</button>
              <button>JATE - Text Editor</button>
              <button>Social Network API</button>
            </section>
          </main>
        }
      />

      <Route path="/Cardsage" element={<Cardsage />} />
    </Routes>
  );
}

export default App;