import React, { useState } from "react";

import Input from "../components/TextInput";
import "./DevSkills.css";

type Skill = {
  skillName?: string;
  developers?: string;
  technologies?: string;
  roles?: string;
};

const API = "https://61ef27ddd593d20017dbb332.mockapi.io/skills";
const SkillPage = () => {
  const [skill, setSkill] = useState<Skill | null>(null);
  const [loadedSkills, setLoadedSkills] = useState<Skill[] | null>(null);

  const handleChange = (value: Record<string, string>) => {
    if (!value) {
      const updatedSkills = { ...skill };
      const key = Object.keys(value)[0] as keyof Skill;
      delete updatedSkills[key];

      return setSkill(updatedSkills);
    }
    setSkill({ ...skill, ...value });
  };

  const handleAdd = () => {
    if (!skill) return;

    fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(skill),
    }).finally(() => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          setLoadedSkills(data);
        });
    });
  };

  return (
    <div className="App">
      <h1 data-testid="page-title">Developers App</h1>
      <div className="skillContainer" data-testid="skill-container">
        <Input label="Skill Name" onChange={handleChange} name="skillName" />
        <Input label="Developers" onChange={handleChange} name="developers" />
        <Input
          label="Technologies"
          onChange={handleChange}
          name="technologies"
        />
        <Input label="Roles" onChange={handleChange} name="roles" />
        <button onClick={handleAdd} data-testid="btn-add-skill">
          Add Skill
        </button>
      </div>
      <div className="skillsList" data-testid="skills-list">
        {loadedSkills?.length &&
          loadedSkills.map(({ skillName, developers, technologies, roles }) => {
            return (
              <div className="skillWrapper">
                <span>{skillName}</span>
                <span>{developers}</span>
                <span>{technologies}</span>
                <span>{roles}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SkillPage;
