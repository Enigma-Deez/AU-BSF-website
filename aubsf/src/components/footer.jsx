import "../styles/footer.css"
function Navbar() {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-item">
          <a href=""><i class="bx bx-envelope"></i></a>
          <div class="footer-title">Email</div>
          <div class="footer-text">aubsf@gmail.com</div>
        </div>

        <div class="footer-item">
          <a href=""><i class="bx bx-phone"></i></a>
          <div class="footer-title">Church Office</div>
          <div class="footer-text">+234-906-85696</div>
        </div>

        <div class="footer-item">
          <a href=""><i class="bx bx-location"></i></a>
          <div class="footer-title">
            Law Building Class IV, inside the Achievers University Campus <br />
            Owo, Ondo State, Nigeria,
          </div>
          <div class="footer-text">AU-BSF</div>
        </div>

        <div class="footer-item">
          <a href="give.html"><i class="bx bx-credit-card-alt"></i></a>
          <div class="footer-title">Give</div>
          <div class="footer-text">Give Online</div>
        </div>
      </div>

      <div class="socials">
        <a href=""><i class="bxl bx-instagram"></i></a>
        <a href=""><i class="bxl bx-youtube"></i></a>
      </div>

      <div class="copyright">
        © 2025 AU-BSF<br />
        <p>JOE</p>
      </div>
    </footer>
  );
}

export default Navbar;
