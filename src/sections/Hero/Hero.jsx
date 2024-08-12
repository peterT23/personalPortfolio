import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/avatar.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
// import facebookLight from "../../assets/facebook-light.png";
// import facebookDark from "../../assets/facebook-dark.png";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  // const facebookIcon = theme === "light" ? facebookLight : facebookDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Nguyen Duy Thang</h1>
        <h2>Mern Stack developer (Full stack web developer)</h2>
        <span>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={facebookIcon} alt="Twitter icon"></img>
          </a> */}
          <a
            href="https://github.com/peterT23?tab=repositories"
            target="_blank"
          >
            <img src={githubIcon} alt="Github icon"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/duy-th%E1%BA%AFng-nguy%E1%BB%85n-56a2a129a/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon"></img>
          </a>
        </span>
        <p className={styles.description}>
          Fullstack web developer with a passion for developing a new modern web
          apps for new better life{" "}
        </p>
        <a
          href={CV}
          // download
        >
          <button className="hover" disabled>
            My Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
