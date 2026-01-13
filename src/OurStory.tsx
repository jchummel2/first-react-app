import React from "react";

const Home: React.FC = () => {
  return (
    <main className="page home-page">
      {/* Optional big picture */}
      {/* <section className="home-photo">
        <img src="/photo.jpg" alt="Leah and Joel" className="home-photo-img" />
      </section> */}

      {/* Date + Location */}
      <section className="home-date-location">
        <div className="home-column">
          <p className="home-label">OCTOBER</p>
          <p className="home-value">24, 2026</p>
        </div>

        <div className="home-divider" />

        <div className="home-column">
          <p className="home-label">ADEL</p>
          <p className="home-value">IOWA</p>
        </div>
      </section>

      {/* Wedding day schedule */}
      <section className="home-schedule">
        <h2 className="schedule-title">WEDDING DAY</h2>
        <p className="schedule-date">OCTOBER 24, 2026</p>

        <div className="schedule-list">
          <div className="schedule-row">
            <div className="schedule-time">4:30 PM–5:30 PM</div>
            <div className="schedule-details">
              <div className="schedule-heading">CEREMONY</div>
              <p>Country Lane Lodge - Wedding &amp; Event Venue</p>
              <p>29300 Prospect Circle, Adel, IA, 50003</p>
              <p>Attire: Semi-Formal</p>
            </div>
          </div>

          <div className="schedule-row">
            <div className="schedule-time">5:30 PM–11:00 PM</div>
            <div className="schedule-details">
              <div className="schedule-heading">RECEPTION</div>
              <p>Country Lane Lodge - Wedding &amp; Event Venue</p>
              <p>29300 Prospect Circle, Adel, IA, 50003</p>
              <p>Attire: Semi-Formal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Monogram */}
      <section className="home-monogram">
        <div className="monogram-initials">L &amp; J</div>
        <div className="monogram-line" />
        <div className="monogram-date">10.24.2026</div>
      </section>
    </main>
  );
};

export default Home;
