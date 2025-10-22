import React from "react";
import MovieCard from "./MovieCard";

const TrendingMovies = () => {
  const trendingMovies = [
    { id: 1, title: "Inception", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",type :"movie" ,description :"A mind-bending thriller about dream invasion.",releasedate :"2010-07-16",rating : "8.8",genres : ["Action", "Sci-Fi", "Thriller"], trailerId: "YoHD9XEInc0" },
    { id: 2, title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",type :"movie" ,description :"When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",releasedate :"2008-07-18",rating : "9.0",genres : ["Action", "Crime", "Drama"], trailerId: "EXeTwQWrcwY" },
    { id: 3, title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",type :"movie" ,description :"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",releasedate :"2014-11-07",rating : "8.6",genres : ["Adventure", "Drama", "Sci-Fi"], trailerId: "zSWdZVtXT7E" },
    { id: 4, title: "Pulp Fiction", poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",type :"movie" ,description :"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",releasedate :"1994-10-14",rating : "8.9",genres : ["Crime", "Drama"], trailerId: "s7EdQ4FqbhY" },
    { id: 5, title: "The Matrix", poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",type :"movie" ,description :"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",releasedate :"1999-03-31",rating : "8.7",genres : ["Action", "Sci-Fi"], trailerId: "vKQi3bBA1y8" },
    { id: 6, title: "Fight Club", poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",type :"movie" ,description :"An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker.",releasedate :"1999-10-15",rating : "8.8",genres : ["Drama"], trailerId: "SUXWAEX2jlg" },
    { id: 7, title: "Forrest Gump", poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",type :"movie" ,description :"The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",releasedate :"1994-07-06",rating : "8.8",genres : ["Drama", "Romance"], trailerId: "bLvqoHBptjg" },
    { id: 8, title: "The Lord of the Rings", poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",type :"movie" ,description :"An epic fantasy adventure based on the novel by J.R.R. Tolkien.",releasedate :"2001-12-19",rating : "8.8",genres : ["Action", "Adventure", "Fantasy"], trailerId: "V75dMMIW2B4" },
    { id: 9, title: "The Godfather", poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",type :"movie" ,description :"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",releasedate :"1972-03-24",rating : "9.2",genres : ["Crime", "Drama"], trailerId: "sY1S34973zA" },
    { id: 10, title: "The Shawshank Redemption", poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",type :"movie" ,description :"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",releasedate :"1994-09-23",rating : "9.3",genres : ["Drama"], trailerId: "6hB3S9bIaco" },
  ];

  return (
    <div className="mb-12">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Trending Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {trendingMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;