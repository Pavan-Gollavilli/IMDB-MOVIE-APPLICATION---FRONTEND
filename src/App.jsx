import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Navbar from "./components/Navbar";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";
import Footer from "./components/Footer";
import AllMovies from "./pages/AllMovies";

function App() {
  return (
    <div className="imdb-bg min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/movies" element={<AllMovies />} />
        <Route path="/watch/:trailerId/:title" element={<VideoPlayer />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
