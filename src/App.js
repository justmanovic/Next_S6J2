import React, { useState } from "react";
import logo from "./logo.png";
import DayNightBtn from "./DayNightBtn";
import ThemeContext from "./ThemeContext";

export default function App() {
  const [mode, setMode] = useState("Day");

  return (
    <ThemeContext.Provider
      value={{
        mode: mode,
        toggleMode: () => {
          if (mode === "Day") setMode("Night");
          else setMode("Day");
        },
      }}
    >
      <div className={mode}>
        <header>
          <h1>Portfolio de John Doe</h1>
          <div className="logo">
            <a href="https://github.com/justmanovic" target="_blank">
              <img src={logo} />
            </a>
          </div>
          <DayNightBtn />
        </header>
        <main>
          <section className="presentation">
            <h3>
              Bonjour, je m'appelle John Doe. Bienvenue sur mon portfolio !
            </h3>
            <p>
              Depuis quelques mois, j'apprends le développement web grâce à The
              Hacking Projet. J'ai ainsi pu apprendre à utiliser Ruby, Rails,
              JavaScript et React.
            </p>
          </section>
          <section className="works">
            <h3>Works</h3>
            <p>
              Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai
              réalisé certains lors de ma formation chez The Hacking Project, et
              d'autres sont des projets personnels.
            </p>
            <ul>
              <li>Projet 1 : Une image de site web + un mini texte au choix</li>
              <li>
                Projet 2 : Une image d'un autre site web + un mini texte au
                choix
              </li>
              <li>Projet 3 : Un mini texte au choix</li>
            </ul>
          </section>
          <section className="contact">
            <h3>Contact</h3>
            <p>
              Vous souhaitez discuter avec moi, que ce soit pour me proposer un
              poste ou pour passer le temps pendant ce confinement ? Remplissez
              le formulaire ci-dessous, je vous contacterai dès que je le peux.
            </p>
            <form>
              <textarea />
              <button type="submit">Envoyer</button>
            </form>
          </section>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}
