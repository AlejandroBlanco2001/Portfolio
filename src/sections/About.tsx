import profile from "../assets/images/other/profile.jpg";
import CV_Spanish from "../assets/file/IsaacAlejandroBlancoAmador_CVE.pdf";
import CV_English from "../assets/file/IsaacAlejandroBlancoAmador_CVI.pdf";

const About = () => {
    return (
        <div className="section about-section" id="about">
            <h2 className="text-section">About</h2>
            <h3 className="inner-header">Who is Isaac?</h3>
            <div className="about-wrapper">
                <img src={profile} alt="profile-pic"></img>
                <div className="about-text">
                    <p>
                        I am passionate about both the functionality and
                        visualization of bringing an idea to life. The
                        experience, it's usability and how you feel, plays a
                        fundamental role in how much you use an application. My
                        style is focus on minimalistic interfaces, "You don't
                        need more space, you need less stuff."
                    </p>
                    <p>
                        I'm a senior studying computer science at the
                        Universidad del Norte 🇨🇴, I have a diploma in data
                        science from ESAP, and a certification in Data science
                        from Correlation One's DS4A program (Yes, one of my
                        biggest interests is data science🤫).
                    </p>
                    <p>
                        I am happy researching, looking for new ideas and
                        learning new ideas. I am currently working as a
                        Full-stack developer focused on the frontend. I am not
                        available for freelancer work, but you can contact me
                        anyway, and say hello.
                    </p>
                    <div className="about-resume">
                        <a href={CV_Spanish} download>
                            <span>Resume in Spanish &#8595;</span>
                        </a>
                        <a href={CV_English} download>
                            <span>Resume in English &#8595;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
