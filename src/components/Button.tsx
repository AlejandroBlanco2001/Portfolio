import { buttonProps } from "../types";

const Button = ({
    onClickFunction,
    text,
    extra_classes,
    logo,
}: buttonProps) => {
    return (
        <button
            onClick={onClickFunction}
            type="submit"
            className={`btn ${extra_classes}`}
        >
            {logo !== "" && (
                <img src={logo} alt="Github icon" className="btn-image"></img>
            )}
            <span>{text}</span>
        </button>
    );
};

export default Button;
