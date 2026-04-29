import { useState } from "react";
import "./lebenslauf.css";

function Lebenslauf() {
  const [lang, setLang] = useState("de");

  function toggleLang() {
    setLang((prev) => (prev === "de" ? "en" : "de"));
  }

  return (
    <div className="cv-page">

      {/* 🌐 LANGUAGE BUTTON (вне рамки) */}
      <button className="lang-button" onClick={toggleLang}>
        <svg viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
          <path d="M2 12h20" />
          <path d="M12 2a15 15 0 010 20" />
          <path d="M12 2a15 15 0 000 20" />
        </svg>
      </button>

      <div className="cv-frame">

        <div className="cv-head">
          <h2 className="cv-main-title">[ LEBENSLAUF ]</h2>
          <h2 className="cv-title">[ PERSONAL FILE ]</h2>
        </div>

        <div className="cv-header">
          <img className="cv-avatar" src="avatar.png" alt="Avatar" />

          <div className="cv-identity">
            <p><b>Name:</b> Sviatoslav</p>
            <p>
              <b>{lang === "de" ? "Wohnort" : "Location"}:</b>{" "}
              Mannheim, {lang === "de" ? "Deutschland" : "Germany"}
            </p>
            <p>
              <b>{lang === "de" ? "Sprachen" : "Languages"}:</b>{" "}
              {lang === "de"
                ? "Ukrainisch (Muttersprache), Russisch (C2), Englisch (B2), Deutsch (A1–A2)"
                : "Ukrainian (native), Russian (C2), English (B2), German (A1–A2)"}
            </p>
          </div>
        </div>

        <section>
          <h3>{lang === "de" ? "Profil" : "Profile"}</h3>
          <p>
            {lang === "de"
              ? "Einsteiger in der Softwareentwicklung mit Fokus auf Webinterfaces, logische Systeme und Automatisierung. Interesse an strukturierten digitalen Umgebungen und praxisnaher Webentwicklung."
              : "Entry-level developer focused on web interfaces, logic systems and automation. Interested in structured digital environments and practical web development."}
          </p>
        </section>

        <section>
          <h3>{lang === "de" ? "Technische Kenntnisse" : "Technical Skills"}</h3>
          <ul>
            <li>
              {lang === "de"
                ? "HTML / CSS / JavaScript: Grundkenntnisse mit praktischer Erfahrung"
                : "HTML / CSS / JavaScript: basic level with practical experience"}
            </li>
            <li>
              {lang === "de"
                ? "React + Vite: erste Erfahrungen, aktuell im Lernprozess"
                : "React + Vite: minimal experience"}
            </li>
            <li>
              {lang === "de"
                ? "Teamarbeit in Webprojekten (Struktur, Komponentenlogik)"
                : "Team-based web development"}
            </li>
            <li>
              {lang === "de"
                ? "Automatisierung und Telegram-Bots, grundlegende SQL-Kenntnisse"
                : "Automation and Telegram bots, basic SQL"}
            </li>
            <li>
              {lang === "de"
                ? "Logische Systeme und Anpassung von Spielmechaniken (GoldSrc)"
                : "Logical systems and GoldSrc game logic adaptation"}
            </li>
          </ul>
        </section>

        <section>
          <h3>{lang === "de" ? "Ausbildung" : "Education"}</h3>
          <p>
            {lang === "de"
              ? "Gymnasium Nr. 15, Bila Tserkva — Allgemeine Schulbildung"
              : "Gymnasium Nr. 15, Bila Tserkva — general school education"}
          </p>
          <p>
            {lang === "de"
              ? "Fachabschluss im Bereich Gastronomie — qualifizierter Facharbeiter"
              : "College diploma in gastronomy — qualified specialist"}
          </p>
        </section>

        <section>
          <h3>{lang === "de" ? "Ziel" : "Goal"}</h3>
          <p>
            {lang === "de"
              ? "Einstieg in die IT-Branche. Suche nach einem Praktikum oder einer Einstiegsposition, um praktische Erfahrung zu sammeln."
              : "Transitioning into IT. Looking for a Praktikum or entry-level position."}
          </p>
        </section>

        <section>
          <h3>{lang === "de" ? "Weitere Kenntnisse" : "Additional Background"}</h3>
          <ul>
            <li>
              {lang === "de"
                ? "Erfahrung mit visuellen Tools, 3D- und Game-Mapping sowie UI-Konzepten"
                : "Experience with visual editing, 3D/game mapping and UI concepts"}
            </li>
            <li>
              {lang === "de"
                ? "Interesse an Automatisierung, Bots und Websystemen"
                : "Interest in automation, bots and web systems"}
            </li>
            <li>
              {lang === "de"
                ? "Strukturiertes Arbeiten und Lernen durch praktische Umsetzung"
                : "Comfortable learning by building and structured tasks"}
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default Lebenslauf;