import "../styles/navbar.css"
function Navbar() {
  return (
      <div class="hero-image">
        <nav class="navpanel" aria-label="Main navigation">
          <div class="nav-container">
            <div class="logo">
              <a href="index.html" id="ollo">
                <img src="./Assets/Logo.png" alt="Logo of AU-BSf" />
                <span>AU-BSF</span>
              </a>
            </div>
            <div class="navbar">
              <a href="">New Here?</a>
              <a href="">Who We Are</a>
              <a href="">Events</a>
              <a href="gallery.html">Gallery</a>
              <a href="give.html">Give</a>
            </div>
          </div>
        </nav>
        {/* Hamburger Icon for mobile */}
        <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false"
          aria-controls="mobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
            {/* <!-- Mobile Menu Overlay --> */}
    <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
      <a href="#">New Here?</a>
      <a href="">Who We Are</a>
      <a href="">Events</a>
      <a href="">Gallery</a>
      <a href="">Give</a>
    </div>
    </div>
  );
}
export default Navbar;
