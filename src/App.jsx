import Cards from "./components/Cards";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Details from "./components/Details";
import TvDetails from "./components/TvDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <>
      <main>
        <article>
          <Hero />
          <Cards />
        </article>
      </main>
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define the movie route */}
          <Route path="/movies/:id" element={<Details category="movie" />} />
          {/* Define the TV show route */}
          <Route path="/Shows/:id" element={<TvDetails category="tvshow" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
