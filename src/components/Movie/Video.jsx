import { useSelector } from "react-redux";
import { getYouTubeVideID } from "../../tools/youtubeUtils";

function Video() {
  const searchFilm = useSelector((store) => store.movies.searchFilm);
  const id = searchFilm.trailerUrl;
  const videoURL = getYouTubeVideID(id);
  return (
    <div className="video-wrapper">
      {/* <video controls>
        <source src='https://www.youtube.com/watch?v=93LAq7YmZ4Q' type="video/mp4" />
      </video> */}
      <iframe
        width="1200"
        height="915"
        src={`https://www.youtube.com/embed/${videoURL}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default Video;
