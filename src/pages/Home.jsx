import React from "react";
import TrendingMovies from "../components/TrendingMovies";
import PopularMovies from "../components/PopularMovies";


const Home = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <TrendingMovies />
        <PopularMovies />
      </div>
    </div>
  );
};

export default Home;
