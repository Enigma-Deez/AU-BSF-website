import { Link } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/navbar.css";
import "../styles/home.css"

export default function Home() {
  return (
    <div className="wrapper">
      <header>
        <img src="./Assets/sheep2.jpg" alt="" />
        <div className="section1">
          <h3>Church For People Like <span className="section1-you">You</span></h3>
          <div className="hero-buttons">
            <button className="btn btn-primary">Plan Your Visit</button>
            <button className="btn btn-secondary">About Us</button>
          </div>
        </div>
      </header>

      <section className="visit-section">
        <div className="visit-content">
          <h3 className="visit-invite">Join Us Sundays at 8am or 9am!</h3>
          <div className="underline"></div>
          <h1 className="church-name">AU-BSF</h1>
          <p className="visit-text">
            We'd love to get to know you! Join us this Sunday!
          </p>
          <p className="visit-location">
            We're located at Law Building className IV, inside the Achievers University Campus<br />
            Owo, Ondo State, Nigeria
          </p>
        </div>
      </section>

      <section className="new-here-section">
        <div className="new-here-container">
          <div className="new-here-text">
            <h2>Are you new?</h2>
            <p>
              Considering AU-BSF as your church home? Wondering how you can grow in your
              relationship with Jesus? Find out what your next steps are.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
          <div className="new-here-image">
            <img src="./Assets/service.jpg" alt="People hugging at church" />
          </div>
        </div>
      </section>

      <section className="new-here-section">
        <div className="new-here-container">
          <div className="new-here-image">
            <img src="./Assets/WalkwGod.jpg" alt="People hugging at church" />
          </div>
          <div className="new-here-text">
            <h2>Need help?</h2>
            <p>
              Whether you’re trying to discern your vocation, struggling with your mental health, having conflict in a
              relationship, or for whatever other reason—our pastoral team is here for you.
            </p>
            <a href="#" className="learn-more">Get in touch</a>
          </div>
        </div>
      </section>

      <section className="three-image-section">
        <div className="images-row">
          <div className="image-container">
            <img src="./Assets/confer.jpg" alt="Community gathering" />
          </div>
          <div className="image-container">
            <img src="./Assets/confer.jpg" alt="Friendly conversation" />
          </div>
          <div className="image-container">
            <img src="./Assets/confer.jpg" alt="Worship music" />
            {/* <!-- <p>Worship Music</p> add descriptions at will --> */}
          </div>
        </div>

        {/* <!-- Centered link below --> */}
        <div className="center-link">
          <a href="gallery.html" className="learn-more">Explore Gallery</a>
        </div>
      </section>

      <section className="Give-section">
        <div className="Give-content">
          <h3>Give Online</h3>
          <p>
            Giving online is safe and easy. To give online, click on the link below. Thank you for your generosity!
          </p>
          <a href="#" className="learn-more">Learn More</a>
        </div>
        <br /><br /><br />
      </section>
      <div>
        <Footer />
        <Navbar />
      </div>
    </div>
  );
}
