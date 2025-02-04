import { Link } from "react-router-dom";
import star from "../../assets/icons/star.png";

function MoviesCard(props) {
  return (
    <Link className="movies__card" to={`/movie/${props.id}`}>
      <div className="movies__card-rating">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <img src={props.imageUrl} alt="" />
    </Link>
  );
}

export default MoviesCard;
