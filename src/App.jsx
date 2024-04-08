import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import SeriesPage from "./components/SeriesPage";
import MoviesPage from "./components/MoviesPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
