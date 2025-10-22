import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://imdb-movie-application-backend.onrender.com/movies");
        const data = response.data;

        console.log("Fetched data:", data);

        const formattedMovies = Array.isArray(data)
          ? data.map((movie, index) => ({
              id: movie.id || index,
              title: movie.primaryTitle || "Untitled",
              poster:
                movie.primaryImage ||
                "https://m.media-amazon.com/images/M/MV5BOWRkN2QwZTQtOTMzZi00MmY4LWE2NDYtODkyMmU2NGIyYTE0XkEyXkFqcGc@._V1_.jpg",
              description: movie.description || "No description available",
              type: movie.type || "Movie",
              genres: Array.isArray(movie.genres) ? movie.genres : [],
              releasedate: movie.releaseDate || "2025-03-10",
              rating: movie.averageRating || "8.6",
            }))
          : [];

        setMovies(formattedMovies);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(
          `Failed to fetch movies: ${err.response?.data?.error || err.message}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-white">Loading movies...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold text-center my-8">All Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mb-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllMovies;

