import React from "react";
import { useTheme } from "./ThemeContext";
import githubLight from "../assets/github-light.svg";
import githubDark from "../assets/github-dark.svg";

function ProjectCard({ src, link, name, desciption }) {
  const { theme, toggleTheme } = useTheme();

  const githubIcon = theme === "light" ? githubLight : githubDark;
  return (
    <>
      <a href={link} target="_blank">
        <img className="hover" src={src} alt={`${name} logo`} />

        <h3>{name}</h3>
        <p>{desciption}</p>
      </a>
    </>
  );
}

export default ProjectCard;
