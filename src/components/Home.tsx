import React from "react";
import joelAndLeahImage1 from "../assets/joelAndLeah1.png";
import Monogram from "./Monogram";

const Home: React.FC = () => {
    return (
        <main className="page home-page">
            {/* Optional big picture */}
            {/* <section className="home-photo">
        <img src="/photo.jpg" alt="Leah and Joel" className="home-photo-img" />
      </section> */}
            <div className="joel-leah-1-wrap">
                <img
                    src={joelAndLeahImage1}
                    alt="Joel & Leah together picture 1"
                    className="joel-leah-1-img"
                    sizes="100vw"
                />
            </div>

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
                <h2 className="schedule-title">Wedding Day</h2>
                <p className="schedule-date">October 24, 2026</p>

                <div className="schedule-grid">
                    <div className="schedule-card">
                        <div className="schedule-time">4:30 PM–5:30 PM</div>
                        <div className="schedule-heading">Ceremony</div>
                        <p>Country Lane Lodge - Wedding &amp; Event Venue</p>
                        <p>29300 Prospect Circle, Adel, IA, 50003</p>
                        <p>Attire: Semi-Formal</p>
                    </div>

                    <div className="schedule-card">
                        <div className="schedule-time">5:30 PM–11:00 PM</div>
                        <div className="schedule-heading">Reception</div>
                        <p>Country Lane Lodge - Wedding &amp; Event Venue</p>
                        <p>29300 Prospect Circle, Adel, IA, 50003</p>
                        <p>Attire: Semi-Formal</p>
                    </div>
                </div>
            </section>
            <Monogram></Monogram>
        </main>
    );
};

export default Home;
