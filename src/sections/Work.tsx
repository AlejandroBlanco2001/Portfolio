import WorkShowcase from "../components/WorkShowcase";

const Work = () => {
    return (
        <div className="work-section">
            <h2 className="text-section">Work</h2>
            <h3 className="inner-header">A Selection Of Ideas that I Built</h3>
            <div className="work-showcase">
                <WorkShowcase title="Pay Fast" description="Pay Fast is a web application that serves as an exemplification model of a commercial payment gateway, making use of design patterns such as 'Circuit Breaker' on React, Express, Prisma and MySQL as a final project of the subject Software Design II." orientation="left" image="" link="https://github.com/AlejandroBlanco2001/PayFast"/>
                <WorkShowcase title="Attendance System" description="Attendance System is a web application built on Express, React and MariaDB as a final project of the subject 'Database' for taking attendance (on-site, remote and hybrid) in university classrooms by scanning QR codes to reduce paper use according to Zero Paper Policy. " orientation="right" image="" link="https://github.com/AlejandroBlanco2001/AttendanceSystem" />
                <WorkShowcase title="Langton's Ant" description="Langton's ant is a web application that simulates the universal Turing machine of Langton's ant proposed by Chris Langton in 1986, developed on Typescript, HTML and CSS." orientation="left" image="" link="https://github.com/AlejandroBlanco2001/Langton-s-ant" />
            </div>
        </div>
    )
};

export default Work;