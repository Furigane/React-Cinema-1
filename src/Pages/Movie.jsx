import { useParams } from "react-router-dom";
import MainInfo from "../components/Movie/MainInfo/MainInfo";
import Video from "../components/Movie/Video";
import { useDispatch, useSelector } from "react-redux";
import { getFilmInfo } from "../Redux/slices/moviesSlice";
import { useEffect } from "react";

function Movie() {
  const param = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilmInfo(param.id));
  }, [dispatch]);

  const searchFilm = useSelector((store) => store.movies.searchFilm);
  console.log(searchFilm);

  return (
    <main>
      {searchFilm ? (
        <>
          <Video />
          <MainInfo />
        </>
      ) : (
        console.log("Error: Произошла ошибка")
      )}
    </main>
  );
}

export default Movie;
