import React from "react";
import styles from "./ProjectsStyles.module.css";
import taskme from "../../assets/taskme.png";
import movieApp from "../../assets/movieapp.png";
import ProjectCard from "../../common/ProjectCard";
import carDatabase from "../../assets/cardatabase.png";
import musicPlayer from "../../assets/music.png";
import jobSearch from "../../assets/Jobsearch.png";
import characterCustomization from "../../assets/charactercustomization.png";

import pokedex from "../../assets/pokedex.png";
import steamClone from "../../assets/steam.jpg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={taskme}
          link={"https://taskme-fullstack.netlify.app/"}
          name="Task me"
          desciption="Task management fullstack app"
        />
        <ProjectCard
          src={carDatabase}
          link={"https://github.com/peterT23/coderCarsDatabase-be"}
          name="Car database Back-end"
          desciption="Car database Back-end"
        />
        <ProjectCard
          src={pokedex}
          link={"https://github.com/peterT23/pokedex-be/tree/master"}
          name="Pokedex Back-end"
          desciption="Pokedex data collection"
        />

        <ProjectCard
          src={movieApp}
          link={"https://netflix-clone-react-app.onrender.com/"}
          name="Movie App"
          desciption="Netflix clone react app"
        />

        <ProjectCard
          src={musicPlayer}
          link={"https://mp3cloneapp-reactjs.netlify.app/"}
          name="Music Player"
          desciption="Mp3 music player react app"
        />
        <ProjectCard
          src={jobSearch}
          link={"https://jobsearchapp-reactrouter-mui-hookform.netlify.app/"}
          name="Job search App"
          desciption="Job search react App"
        />
        <ProjectCard
          src={characterCustomization}
          link={"https://reactjs-character-customization.netlify.app/"}
          name="Character customization game"
          desciption="Customization react app"
        />
        <ProjectCard
          src={steamClone}
          link={"https://celadon-fudge-14f94d.netlify.app/"}
          name="Steam Clone app"
          desciption="HTML, CSS, Javascript, fetching API"
        />
      </div>
    </section>
  );
}

export default Projects;
