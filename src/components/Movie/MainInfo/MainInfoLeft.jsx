import Rating from "../Rating";

function MainInfoLeft() {
  return (
    <div className="main__info-left">
      <div className="main__info-left-title">
        <p>Бегущий по лезвию 2049</p>
        <Rating />
      </div>
      <div className="main__info-left-categoryes">
        <p>18+</p>
        <p>HD</p>
        <p>2022</p>
        <p>Movie</p>
      </div>
      <div className="main__info-left-about">
        <p>Description</p>
        <p>
          Two years have passed unnoticed in world. Former newcomers joined the
          ranks of experienced Shinobi in the ranks of tuning and zenin. The
          main characters did not sit still – everyone became a disciple of one
          of the legendary Sannin – the three great ninja Konoha.
        </p>
      </div>
    </div>
  );
}

export default MainInfoLeft;
