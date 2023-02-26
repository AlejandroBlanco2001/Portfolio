import WorkShowcase from "../components/WorkShowcase";

const Work = () => {
    return (
        <div className="work-section">
            <h2 className="text-section">Work</h2>
            <h3 className="inner-header">A Selection Of Ideas that I Built</h3>
            <div className="work-showcase">
                <WorkShowcase title="Attendance System" description="AttendaceSystem is a software made for taking the attendace of some given class (face-to-face, online, bimodal) taking into account the Zero Paper policy. Made with NodeJS, React and MariaDB" orientation="left" image=""></WorkShowcase>
                <WorkShowcase title="Pay Fast" description="AttendaceSystem is a software made for taking the attendace of some given class (face-to-face, online, bimodal) taking into account the Zero Paper policy. Made with NodeJS, React and MariaDB" orientation="right" image=""></WorkShowcase>
                <WorkShowcase title="Langton's Ant" description="AttendaceSystem is a software made for taking the attendace of some given class (face-to-face, online, bimodal) taking into account the Zero Paper policy. Made with NodeJS, React and MariaDB" orientation="left" image=""></WorkShowcase>
            </div>
        </div>
    )
};

export default Work;