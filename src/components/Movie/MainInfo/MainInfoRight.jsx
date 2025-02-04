import { useSelector } from "react-redux";

function MainInfoRight() {

  const searchFilm = useSelector((store) => store.movies.searchFilm);

  return (
    <div className="main__info-right">
      <p>About</p>
      <div className="main__info-rigth-info">
        <div>
          <p>Type:</p>
          <p>{searchFilm.aboutInfo[0]}</p>
        </div>
        <div>
          <p>Director:</p>
          <p>{searchFilm.aboutInfo[1]}</p>
        </div>
        <div>
          <p>Date aired:</p>
          <p>{searchFilm.aboutInfo[2]}</p>
        </div>
        <div>
          <p>Duration:</p>
          <p>{searchFilm.aboutInfo[3]}</p>
        </div>
      </div>
    </div>
  );
}

export default MainInfoRight;
