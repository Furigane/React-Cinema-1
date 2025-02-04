import { useSelector } from "react-redux";
import Rating from "../Rating";

function MainInfoLeft() {
  const searchFilm = useSelector((store) => store.movies.searchFilm);

  return (
    <div className="main__info-left">
      <div className="main__info-left-title">
        <p>{searchFilm.title}</p>
        <Rating />
      </div>
      <div className="main__info-left-categoryes">
        {searchFilm.categoryes.map((value, index) => (
          <p>{value}</p>
        ))}
      </div>
      <div className="main__info-left-about">
        <p>Description</p>
        <p>{searchFilm.description}</p>
      </div>
    </div>
  );
}

export default MainInfoLeft;
