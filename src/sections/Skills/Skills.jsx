import React from "react";
import styles from "./SkillsStyles.module.css";
import cssLogo from "../../assets/csslogo.png";
import SkillList from "../../common/SkillList";
import htmlLogo from "../../assets/html.png";
import javascriptLogo from "../../assets/javascript.png";
import reactLogo from "../../assets/react.png";
import reduxLogo from "../../assets/redux.png";
import materialuiLogo from "../../assets/materialui.png";
import nodejsLogo from "../../assets/nodejs.png";
import expressjsLogo from "../../assets/expressjs.png";
import githubLogo from "../../assets/gihublogo.png";
import mongodbLogo from "../../assets/mongodb.png";
import typescriptLogo from "../../assets/typeScript.png";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList logo={cssLogo} name="CSS" />
        <SkillList logo={htmlLogo} name="HTML" />
        <SkillList logo={materialuiLogo} name="Material UI" />
        <SkillList logo={javascriptLogo} name="Javascript" />
        <SkillList logo={typescriptLogo} name="TypeScript" />
        <SkillList logo={reactLogo} name="React JS" />
        <SkillList logo={reduxLogo} name="Redux toolkit" />
        <SkillList logo={nodejsLogo} name="Node JS" />
        <SkillList logo={expressjsLogo} name="Express JS" />
        <SkillList logo={mongodbLogo} name="Mongodb" />
        <SkillList logo={githubLogo} name="Github" />
      </div>
    </section>
  );
}

export default Skills;
