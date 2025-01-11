import MoviesCard from "./MoviesCard";
import SkeletonFilm from "../Skeletons/SkeletonFilm";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../../Redux/slices/moviesSlice";

function MoviesList() {
  const dispatch = useDispatch();

  const { films, status } = useSelector((store) => {
    return store.movies;
  });

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div id="movies" className="movies anchor">
      {status === "loading" ? (
        [... Array(12)].map((_, index) => <SkeletonFilm key={index} />)
      ) : (
        films.map((value, index) => <MoviesCard key={index} {...value} />)
      )}
    </div>
  );
}

export default MoviesList;
