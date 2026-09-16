"use client";

import { useEffect, useRef } from "react";

const soundcloudUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/kosmorbr&color=%23d9c08a&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true";

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    const handleMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      heroRef.current?.style.setProperty("--mx", `${x}`);
      heroRef.current?.style.setProperty("--my", `${y}`);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div className="noise" aria-hidden="true" />

      <nav className="nav">
        <button className="brand" onClick={() => scrollTo("top")}>KOSMOR</button>
        <div className="nav-links">
          <button onClick={() => scrollTo("sound")}>SOUND</button>
          <button onClick={() => scrollTo("about")}>ABOUT</button>
          <button onClick={() => scrollTo("events")}>EVENTS</button>
          <button onClick={() => scrollTo("contact")}>CONTACT</button>
        </div>
        <a className="book-btn" href="mailto:booking@kosmor.com">BOOKING ↗</a>
      </nav>

      <section id="top" ref={heroRef} className="hero">
        <div className="hero-grid" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />

        <div className="hero-copy">
          <p className="eyebrow">DJ / PSYTRANCE / FULL ON</p>
          <h1>
            ENTER THE
            <span> KOSMIC</span>
            <br />
            FREQUENCY.
          </h1>
          <p className="hero-description">
            Frequências psicodélicas, grooves hipnóticos e energia de pista.
            Um projeto construído para levar a experiência do Full On para outro estado.
          </p>
          <div className="hero-actions">
            <button className="primary" onClick={() => scrollTo("sound")}>
              LISTEN TO THE SOUND <span>↓</span>
            </button>
            <button className="ghost" onClick={() => scrollTo("contact")}>
              BOOK KOSMOR
            </button>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="photo-halo" />
          <div className="photo-frame">
            <img src="/artist.jpeg" alt="KOSMOR DJ" className="hero-photo" />
          </div>
          <div className="photo-tag">BRAZIL / MG</div>
        </div>

        <div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          PSYTRANCE · FULL ON · PSYCHEDELIC GROOVE · 138–145 BPM · KOSMOR · PSYTRANCE · FULL ON ·
        </div>
      </div>

      <section id="sound" className="section sound-section">
        <div className="section-head" data-reveal>
          <p className="eyebrow">01 / SOUND</p>
          <h2>PRESS PLAY.<br /><em>LOSE THE MAP.</em></h2>
        </div>

        <div className="sound-layout">
          <div className="sound-copy" data-reveal>
            <span className="big-index">01</span>
            <p>
              A seleção passa pelo Full On, progressive psychedelic textures
              e momentos de maior pressão para construir uma narrativa de pista.
            </p>
            <div className="specs">
              <div><span>STYLE</span><strong>FULL ON / PSY</strong></div>
              <div><span>ENERGY</span><strong>HIGH / GROOVY</strong></div>
              <div><span>FORMAT</span><strong>CLUB / FESTIVAL</strong></div>
            </div>
          </div>

          <div className="player-shell" data-reveal>
            <div className="player-top">
              <span>LIVE TRANSMISSION</span>
              <span>KOSMORBR / SOUNDCLOUD</span>
            </div>
            <iframe
              title="KOSMOR no SoundCloud"
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={soundcloudUrl}
            />
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-image" data-reveal>
          <img src="/artist.jpeg" alt="KOSMOR portrait" />
          <div className="image-caption">KOSMOR / 2026</div>
        </div>
        <div className="about-copy" data-reveal>
          <p className="eyebrow">02 / THE ARTIST</p>
          <h2>FROM THE<br /><em>UNKNOWN.</em></h2>
          <p>
            KOSMOR é um projeto de DJ focado na experiência psicodélica:
            linhas de baixo pulsantes, melodias espaciais e transições pensadas
            para manter a pista em movimento.
          </p>
          <p>
            A proposta visual acompanha o som: tecnologia, espaço, geometria
            e uma estética minimalista com tensão underground.
          </p>
          <div className="quote">“THE FREQUENCY IS THE MESSAGE.”</div>
        </div>
      </section>

      <section id="events" className="section events-section">
        <div className="section-head" data-reveal>
          <p className="eyebrow">03 / EVENTS</p>
          <h2>NEXT<br /><em>TRANSMISSIONS.</em></h2>
        </div>

        <div className="event-list" data-reveal>
          <article className="event-row muted">
            <div className="event-date"><span>—</span> TBA</div>
            <div><strong>NEW TRANSMISSION</strong><small>DATES TO BE ANNOUNCED</small></div>
            <span className="event-arrow">+</span>
          </article>
          <article className="event-row muted">
            <div className="event-date"><span>—</span> TBA</div>
            <div><strong>FULL ON SESSION</strong><small>LOCATION TO BE ANNOUNCED</small></div>
            <span className="event-arrow">+</span>
          </article>
          <article className="event-row muted">
            <div className="event-date"><span>—</span> TBA</div>
            <div><strong>FESTIVAL TRANSMISSION</strong><small>BOOKING OPEN</small></div>
            <span className="event-arrow">↗</span>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-orbit" />
        <div className="contact-inner" data-reveal>
          <p className="eyebrow">04 / BOOKING</p>
          <h2>LET&apos;S MAKE<br /><em>SOME NOISE.</em></h2>
          <p>Bookings, festivals, clubs and collaborations.</p>
          <a className="contact-email" href="mailto:booking@kosmor.com">booking@kosmor.com ↗</a>
          <div className="socials">
            <a href="https://soundcloud.com/kosmorbr" target="_blank" rel="noreferrer">SOUNDCLOUD</a>
            <a href="#" onClick={(e) => e.preventDefault()}>INSTAGRAM</a>
            <a href="#" onClick={(e) => e.preventDefault()}>YOUTUBE</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 KOSMOR</span>
        <span>PSYTRANCE / FULL ON</span>
        <button onClick={() => scrollTo("top")}>BACK TO TOP ↑</button>
      </footer>
    </main>
  );
}
