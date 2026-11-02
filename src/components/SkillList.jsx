function SkillList({ skills }) {
  return (
    <ul className="skills">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}

export default SkillList;