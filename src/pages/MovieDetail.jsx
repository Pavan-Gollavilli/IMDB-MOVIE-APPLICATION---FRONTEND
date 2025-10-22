import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const allMovies = [
    { id: 1, title: "Inception", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", type: "movie", description: "A mind-bending thriller about dream invasion.", releasedate: "2010-07-16", rating: "8.8", genres: ["Action", "Sci-Fi", "Thriller"], trailerId: "YoHD9XEInc0" },
    { id: 2, title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", type: "movie", description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.", releasedate: "2008-07-18", rating: "9.0", genres: ["Action", "Crime", "Drama"], trailerId: "EXeTwQWrcwY" },
    { id: 3, title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", type: "movie", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", releasedate: "2014-11-07", rating: "8.6", genres: ["Adventure", "Drama", "Sci-Fi"], trailerId: "zSWdZVtXT7E" },
    { id: 4, title: "Pulp Fiction", poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", type: "movie", description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", releasedate: "1994-10-14", rating: "8.9", genres: ["Crime", "Drama"], trailerId: "s7EdQ4FqbhY" },
    { id: 5, title: "The Matrix", poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", type: "movie", description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", releasedate: "1999-03-31", rating: "8.7", genres: ["Action", "Sci-Fi"], trailerId: "vKQi3bBA1y8" },
    { id: 6, title: "Fight Club", poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", type: "movie", description: "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker.", releasedate: "1999-10-15", rating: "8.8", genres: ["Drama"], trailerId: "SUXWAEX2jlg" },
    { id: 7, title: "Forrest Gump", poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", type: "movie", description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold through the perspective of an Alabama man with an IQ of 75.", releasedate: "1994-07-06", rating: "8.8", genres: ["Drama", "Romance"], trailerId: "bLvqoHBptjg" },
    { id: 8, title: "The Lord of the Rings", poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", type: "movie", description: "An epic fantasy adventure based on the novel by J.R.R. Tolkien.", releasedate: "2001-12-19", rating: "8.8", genres: ["Action", "Adventure", "Fantasy"], trailerId: "V75dMMIW2B4" },
    { id: 9, title: "The Godfather", poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", type: "movie", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", releasedate: "1972-03-24", rating: "9.2", genres: ["Crime", "Drama"], trailerId: "sY1S34973zA" },
    { id: 10, title: "The Shawshank Redemption", poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", type: "movie", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", releasedate: "1994-09-23", rating: "9.3", genres: ["Drama"], trailerId: "6hB3S9bIaco" },
    { id: 11, title: "Avatar", poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg", type: "movie", description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.", releasedate: "2009-12-18", rating: "7.8", genres: ["Action", "Adventure", "Fantasy"], trailerId: "5PSNL1qE6VY" },
    { id: 12, title: "Titanic", poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", type: "movie", description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.", releasedate: "1997-12-19", rating: "7.8", genres: ["Drama", "Romance"], trailerId: "2e-eXJ6HgkQ" },
    { id: 13, title: "Star Wars", poster: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg", type: "movie", description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station.", releasedate: "1977-05-25", rating: "8.6", genres: ["Action", "Adventure", "Fantasy"], trailerId: "vZ734NWnAHA" },
    { id: 14, title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", type: "movie", description: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos.", releasedate: "2019-04-26", rating: "8.4", genres: ["Action", "Adventure", "Drama"], trailerId: "TcMBFSGVi1c" },
    { id: 15, title: "Jurassic Park", poster: "https://image.tmdb.org/t/p/w500/b1AQhkMUbUvXGGFhYJNhPjqoKpx.jpg", type: "movie", description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.", releasedate: "1993-06-11", rating: "8.1", genres: ["Adventure", "Sci-Fi", "Thriller"], trailerId: "lc0UehYemOA" }
  ];

  const movie = allMovies.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl text-white">Movie not found</h1>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-medium transition-colors"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 text-yellow-400 hover:text-yellow-300 flex items-center gap-2 transition-colors"
      >
        ← Back
      </button>
      
      <div className="bg-black/90 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-96 md:h-full object-cover"
            />
          </div>
          
          <div className="md:w-2/3 p-8">
            <h1 className="text-4xl font-bold text-white mb-4">{movie.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                {movie.rating} ⭐
              </span>
              <span className="text-gray-300">{movie.releasedate}</span>
              <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                {movie.type.toUpperCase()}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map((genre, index) => (
                <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {genre}
                </span>
              ))}
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {movie.description}
            </p>
            
            <button 
              onClick={() => navigate(`/watch/${movie.trailerId}/${encodeURIComponent(movie.title)}`)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;