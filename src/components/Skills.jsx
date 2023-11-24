const Skills = ({ skillsData }) => {
  return (
    <>
      <h3 className="text-xl mb-4 text-slate-700 dark:text-slate-300 ">
        Skills and technologies
      </h3>
      <div className="skills-container mt-2 flex flex-wrap gap-x-4 gap-y-2">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-2 w-max rounded-md bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary hover:shadow-xl transition-colors"
          >
            <span className="text-base whitespace-nowrap">{skill.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
