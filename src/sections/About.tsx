import profile from "../assets/images/other/profile.jpg";

const About = () => {
    return (
        <div className="about-section">
            <h2 className="text-section">About</h2>
            <div className="about-wrapper">
                <img src={profile} alt="profile-pic"></img>
                <p>
                    Hey, I'm Isaac Blanco. I'm a fullstack web developer, data
                    science enthusiast and senior computer science student from
                    Colombia. I'm also quite passionate about gym and reading,
                    and I'm also very curious about learning (or creating) new
                    ways of automating processes and creative ways of coding.
                </p>
            </div>
        </div>
    );
};

export default About;
