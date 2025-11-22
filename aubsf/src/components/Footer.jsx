import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-item">
          <i className="bx bx-envelope"></i>
          <div className="footer-title">Email</div>
          <div className="footer-text">aubsf@gmail.com</div>
        </div>

        <div className="footer-item">
          <i className="bx bx-phone"></i>
          <div className="footer-title">Church Office</div>
          <div className="footer-text">+234-906-85696</div>
        </div>

        <div className="footer-item">
          <i className="bx bx-location"></i>
          <div className="footer-title">
            Law Building class IV, inside Achievers University Campus <br />
            Owo, Ondo State, Nigeria
          </div>
          <div className="footer-text">AU-BSF</div>
        </div>

        <div className="footer-item">
          <Link to="/give"><i className="bx bx-credit-card-alt"></i></Link>
          <div className="footer-title">Give</div>
          <div className="footer-text">Give Online</div>
        </div>
      </div>

      <div className="socials">
        <Link to="#"><i className="bxl bx-instagram"></i></Link>
        <Link to="#"><i className="bxl bx-youtube"></i></Link>
      </div>

      <div className="copyright">
        © 2025 AU-BSF
        <p>JOE</p>
      </div>
    </footer>
  );
}

export default Footer;
