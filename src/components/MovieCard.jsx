import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate(`/movies/${movie.id}`);
  };
  
  return (
    <div 
      onClick={handleCardClick}
      className="group relative bg-black/90 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400/50 cursor-pointer"
    >
      <div className="relative w-full h-72">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
            {movie.title}
          </h2>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-bold">
               {movie.rating} ⭐
              </span>
              <span className="text-gray-300 text-sm">{movie.releasedate}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {Array.isArray(movie.genres) ? movie.genres.slice(0, 3).map((genre, index) => (
              <span key={index} className="bg-white/20 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                {genre}
              </span>
            )) : null}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-300 text-sm line-clamp-2 mb-3">
          {movie.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-yellow-400 text-sm font-medium">{movie.type}</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/watch/${movie.trailerId}/${encodeURIComponent(movie.title)}`);
            }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-medium transition-colors"
          >
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
