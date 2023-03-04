import Button from "./Button";
import { WorkShowcaseProps } from "../types";
import git from "../assets/images/icons/git.png";

const WorkShowcase = ({
    title,
    description,
    image,
    orientation,
    link,
}: WorkShowcaseProps) => {
    const moveToLink = () => window.open(link, "_blank");

    return (
        <div className="work">
            {orientation === "left" ? (
                <img
                    src={image}
                    alt={title + " image"}
                    className="work-image"
                />
            ) : (
                <div></div>
            )}
            <div className="work-text">
                <h4>{title}</h4>
                <p>{description}</p>
                <Button
                    onClickFunction={moveToLink}
                    text="GitHub"
                    extra_classes="work-btn"
                    logo={git}
                ></Button>
            </div>
            {orientation === "right" ? (
                <img
                    src={image}
                    alt={title + " image"}
                    className="work-image"
                />
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default WorkShowcase;
