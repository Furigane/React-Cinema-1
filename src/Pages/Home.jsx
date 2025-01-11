import Banner from "../components/Home/Banner";
import Filter from "../components/Filter/Filter";
import MoviesList from "../components/Movies/MoviesList";
import MoviesScroll from "../components/Movies/MoviesScroll";
function Home() {
  return (
    <>
      <Banner />
      <div className="container">
        <Filter />
        <MoviesList />
        <MoviesScroll />
      </div>
    </>
  );
}

export default Home;
