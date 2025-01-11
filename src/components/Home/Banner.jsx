import video from "../../assets/videos/Титаник (1997) «Titanic» - Трейлер (Trailer) - Что посмотреть_ (1080p, h264).mp4";
import header_banner from "../../assets/background.jpg";

function Banner() {
  return (
    <div className="header__banner">
      <div>
        <p>REACT CINEMA</p>
        <p>
          Subheading that sets up context, shares more info about the website,
          or generally gets people psyched to keep scrolling.
        </p>
        <div>
          <a href="#movies">Movies</a>
          <button>Favorites</button>
        </div>
      </div>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <img src={header_banner} alt="" />
    </div>
  );
}

export default Banner;
