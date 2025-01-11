import facebook from "../../assets/icons/icons8-facebook-новый-144.png";
import instagram from "../../assets/icons/icons8-instagram-144.png";
import youtube from "../../assets/icons/icons8-youtube-144.png";
import linkedin from "../../assets/icons/icons8-линкедин-144.png";

function Footer() {
  return (
    <footer>
      <div className="footer__padding">
        <div className="site__info">
          <p>REACT CINEMA</p>
          <div>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="footer__hrefs">
          <div>
            <p>Main</p>
            <p>Topic</p>
            <p>Topic</p>
            <p>Topic</p>
          </div>
          <div>
            <p>FAQ</p>
            <p>Topic</p>
            <p>Topic</p>
            <p>Topic</p>
          </div>
          <div>
            <p>Reports</p>
            <p>Topic</p>
            <p>Topic</p>
            <p>Topic</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
