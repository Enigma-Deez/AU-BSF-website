import "../styles/global.css";
import "../styles/give.css";

export default function Give() {
  return (
    <div className="wrapper">
      <section className="give-hero">
        <div>
          <h2>"For all things come from You, and of your own we have given you."</h2>
          <p><em>1 Chronicles 29:14</em></p>
          <div className="give-hero-content">
            <h3>Support the Ministry of AU-BSF</h3>
            <p>We invite you to partner with us in spreading truth, beauty, and goodness through your generous giving.</p>
          </div>
        </div>
      </section>

      <section className="ways-to-give">
        <div className="give-container">
          <h2>Ways to Give</h2>
          <p>If you are interested in leaving a bequest to AU-BSF, please contact us at <a href="mailto:aubsf@gmail.com">aubsf@gmail.com</a> or call <a href="tel:+2347877559080">+234 705 755 8080</a>.</p>

          <div className="give-method">
            <h3>Direct Deposit</h3>
            <i class='bx  bx-credit-card-alt'></i> 
            <p><strong>AU-BSF Church Account</strong><br />
            MONIE POINT<br />
            5005 4317 57 <br />Susan Ibiloye Oyediran </p>
          </div>

            <div className="give-method">
            <h3>In Person</h3>
            <i class='bx  bx-user'></i> 
            <p>Give during Sunday morning worship or any of our midweek services.</p>
          </div>
        </div>
      </section>
    </div>
  );
}