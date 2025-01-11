import video from "../../assets/videos/Титаник (1997) «Titanic» - Трейлер (Trailer) - Что посмотреть_ (1080p, h264).mp4";


function Video() {
  return (
    <div className="video-wrapper">
      <video controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
export default Video;
