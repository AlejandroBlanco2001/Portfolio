import { buttonProps } from "../types";

const Button = ({ onClickFunction, text }: buttonProps) => {
    return (
        <button onClick={onClickFunction} type="submit" className="btn">
            {text}
        </button>
    );
};

export default Button;
