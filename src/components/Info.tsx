import React from "react";
import Monogram from "./Monogram";

const Info: React.FC = () => {
  return (
    <main className="page">
      <h1 className="page-title">Wedding Info</h1>

      <section className="section grid-2">
        <div className="card">
          <h2>Ceremony</h2>
          <p>
            Saturday, October 24, 2026
            <br />
            4:30 PM
            <br />
            Country Lane Lodge
            <br />
            29300 Prospect Circle, Adel, IA 50003
          </p>
        </div>

        <div className="card">
          <h2>Reception</h2>
          <p>
            Following the ceremony
            <br />
            Country Lane Lodge
            <br />
            29300 Prospect Circle, Adel, IA 50003
          </p>
        </div>
      </section>

      <section className="section card">
        <h2>Dress Code</h2>
        <p>Cocktail / Semi-Formal.</p>
      </section>

      <section className="section card">
        <h2>Parking & Travel</h2>
        <p>
          On-site parking is available at the venue. Ride share recommended for
          guests staying in West Des Moines.
        </p>
      </section>

      <section className="section card">
        <h2>Hotels</h2>
        <p>
          We will provide hotel block information closer to the date. Suggested
          areas: West Des Moines, Waukee, Adel.
        </p>
      </section>

      <section className="section card">
        <h2>Attire Notes</h2>
        <p>
          Please no jeans or athletic clothing. Comfortable shoes recommended
          for dancing — the dance floor gets real, real fast.
        </p>
      </section>
      <Monogram></Monogram>
    </main>
  );
};

export default Info;
