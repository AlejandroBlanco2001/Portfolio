import logos from "../assets/images/logos/";

const Skills = () => {
    const skills = logos;

    return (
        <div className="skills-section">
            <h2 className="text-section">Skills & Tools</h2>
            <div className="grid-skills">
                {skills.map((skill, index) => (
                    <div className="grid-skills-item" key={index}>
                        <img src={skill[0]} alt={skill[1]}></img>
                        <span>{skill[1]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
