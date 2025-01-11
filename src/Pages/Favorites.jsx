import Banner from "../components/Favorites/Banner";
import FavoritesList from "../components/Favorites/FavoritesList";
import Filter from "../components/Filter/Filter";
import MoviesList from "../components/Movies/MoviesList";
import MoviesScroll from "../components/Movies/MoviesScroll";

function Favorites() {
  return (
    <>
      <Banner />
      <div className="container">
        <Filter />
        <div className="favorites_movies">
          <FavoritesList />
          <MoviesList />
        </div>
        <MoviesScroll />
      </div>
    </>
  );
}
export default Favorites;
