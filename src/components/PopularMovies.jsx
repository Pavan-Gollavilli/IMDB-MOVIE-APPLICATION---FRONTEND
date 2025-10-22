import React from "react";
import MovieCard from "./MovieCard";

const PopularMovies = () => {
  const popularMovies = [
    { id: 11, title: "Avatar", poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg", type: "movie", description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.", releasedate: "2009-12-18", rating: "7.8", genres: ["Action", "Adventure", "Fantasy"], trailerId: "5PSNL1qE6VY" },
    { id: 12, title: "Titanic", poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", type: "movie", description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.", releasedate: "1997-12-19", rating: "7.8", genres: ["Drama", "Romance"], trailerId: "2e-eXJ6HgkQ" },
    { id: 13, title: "Star Wars", poster: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg", type: "movie", description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station.", releasedate: "1977-05-25", rating: "8.6", genres: ["Action", "Adventure", "Fantasy"], trailerId: "vZ734NWnAHA" },
    { id: 14, title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", type: "movie", description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.", releasedate: "2019-04-26", rating: "8.4", genres: ["Action", "Adventure", "Drama"], trailerId: "TcMBFSGVi1c" },
    { id: 15, title: "Jurassic Park", poster: "https://image.tmdb.org/t/p/w500/b1xCNnyrPebIc7EWNZIa6BYzYuI.jpg", type: "movie", description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.", releasedate: "1993-06-11", rating: "8.1", genres: ["Adventure", "Sci-Fi", "Thriller"], trailerId: "lc0UehYemOA" },
    { id: 16, title: "Spider-Man", poster: "https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg", type: "movie", description: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero.", releasedate: "2002-05-03", rating: "7.3", genres: ["Action", "Adventure", "Sci-Fi"], trailerId: "t06RUxPbp_c" },
    { id: 17, title: "The Lion King", poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg", type: "movie", description: "A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.", releasedate: "1994-06-24", rating: "8.5", genres: ["Animation", "Adventure", "Drama"], trailerId: "4sj1MT05lAA" },
    { id: 18, title: "Gladiator", poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", type: "movie", description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.", releasedate: "2000-05-05", rating: "8.5", genres: ["Action", "Adventure", "Drama"], trailerId: "owK1qxDselE" },
    { id: 19, title: "Saving Private Ryan", poster: "https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg", type: "movie", description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.", releasedate: "1998-07-24", rating: "8.6", genres: ["Drama", "War"], trailerId: "9CiW_DgxCnQ" },
    { id: 20, title: "Goodfellas", poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg", type: "movie", description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.", releasedate: "1990-09-21", rating: "8.7", genres: ["Biography", "Crime", "Drama"], trailerId: "qo5jJpHtI1Y" }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Top 10 Popular Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;