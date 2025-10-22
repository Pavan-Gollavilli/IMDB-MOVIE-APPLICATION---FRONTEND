import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const VideoPlayer = () => {
  const { trailerId, title } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex items-center justify-between p-4 bg-gray-900">
        <h1 className="text-2xl font-bold text-yellow-400">{decodeURIComponent(title)} - Trailer</h1>
        <button 
          onClick={() => navigate(-1)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-medium transition-colors"
        >
          ← Back
        </button>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&rel=0`}
              title={`${decodeURIComponent(title)} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;