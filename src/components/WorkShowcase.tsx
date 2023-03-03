import Button from "./Button";
import { WorkShowcaseProps } from "../types";

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
                <img src={image} alt={title + " image"} />
            ) : (
                <div></div>
            )}
            <div className="work-text">
                <h4>{title}</h4>
                <p>{description}</p>
                <Button onClickFunction={moveToLink} text="GitHub"></Button>
            </div>
            {orientation === "right" ? (
                <img src={image} alt={title + " image"} />
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default WorkShowcase;
