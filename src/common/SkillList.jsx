import React from "react";

function SkillList({ logo, name }) {
  return (
    <div>
      <img src={logo} alt={`${name} logo`} />
      <p>{name}</p>
    </div>
  );
}

export default SkillList;
