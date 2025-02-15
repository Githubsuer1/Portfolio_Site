const skills = ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Git", "GitHub","Expressjs"];

const Skills = () => {
  return (
    <section id="skills" className="h-screen bg-gray-300 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Skills</h2>
        <div className="mt-4 flex flex-wrap justify-center">
          {skills.map((skill) => (
            <span key={skill} className="m-2 px-4 py-2 bg-blue-500 text-white rounded-lg">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
