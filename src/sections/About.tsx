import profile from "../assets/images/other/profile.jpg";

const About = () => {
    return (
        <div className="about-section">
            <h2 className="text-section">About</h2>
            <h3 className="inner-header">Who is Isaac?</h3>
            <div className="about-wrapper">
                <img src={profile} alt="profile-pic"></img>
                <div className="about-text">
                    <p>
                    I am passionate about both the functionality and visualization of bringing an idea to life. 
                    The experience, its usability and how you feel plays a fundamental role in how much you 
                    use an application. And I completely agree with the phrase "You don't need more space, you need less stuff."
                    </p>
                    <p>I'm a senior studying computer science at the University of the North 🇨🇴, I have a diploma 
                    in data science from ESAP, and a certification in data science from Correlation One's DS4A
                    program (Yes, one of my biggest interests is data science🤫).
                    </p>
                    <p>
                    I am happy researching, looking for new ideas and learning new ideas. I am currently 
                    working as a fullstack developer focused on the frontend. I am not available for freelancer 
                    work, but you can contact me anyway and say hello. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
