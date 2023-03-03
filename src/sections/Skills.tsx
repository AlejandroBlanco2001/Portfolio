import logos from "../assets/images/logos/";

const Skills = () => {
    const skills = logos;

    return (
        <div className="section skills-section">
            <h2 className="text-section">Skills & Tools</h2>
            <h3 className="inner-header">My Toolbox & Things I Can Do</h3>
            <p>
                The skills, tools and technologies that I use to bring my ideas
                to life:
            </p>
            <div className="grid-skills">
                {skills.map((skill, index) => (
                    <div className="grid-skills-item" key={index}>
                        <img src={skill[0]} alt={skill[1]}></img>
                        <span>{skill[1]}</span>
                    </div>
                ))}
            </div>
            <h3 className="inner-header">Current working on</h3>
            <p>
                I am currently learning more in deepth about React and Redux on
                terms of Frontend and FastAPI and SpringBoot on terms of
                Backend. I am also learning more about DevOps and Cloud
                Computing. I am also learning more about UX/UI Design and I am
                currently working on a project to improve my skills in this
                area.
            </p>
        </div>
    );
};

export default Skills;
